/**
 * Created by tungtouch on 3/27/15.
 */
Collections = new Mongo.Collection('collections');

Collections.attachSchema(new SimpleSchema({
    // title: Tiêu đề của Collection
    title: {
        type: String
    },

    // slug: tên Collection được gán vào URL để SEO
    slug: {
        type: String
    },

    // archived: Đưa vào lưu trữ, chỉ hiển thị trong trang `Archive Collection`
    // và người dùng có thể xóa hẳn Collection
    archived: {
        type: Boolean
    },

    // owner: Chủ sở hữu đã tạo ra Collection, thường là `user id current`
    owner: {
        type: String
    },

    // Members: Lưu trữ các id thành viên có trong Collection. .$.: là một hình
    // thức Sub-Schema trong Meteor
    'members.$.userId': {
        type: String
    },

    // isAdmin: Thành viên có phải là Admin không?
    'members.$.isAdmin': {
        type: Boolean
    },

    // permission: Phân quyền members được thấy Collection
    permission: {
        type: String,
        allowedValues: ['public', 'private']
    },

    // theme: Giao diện màu sắc của Collection
    'theme': {
        type: String
    },

    // createdAt: Ngày tạo, khi update sẽ bị chặn
    createdAt: {
        type: Date,
        denyUpdate: true
    },

    // modifiredAt: Ngày sửa, sẽ không thêm lúc đầu. `optional` field không bắt buộc
    modifiedAt: {
        type: Date,
        denyInsert: true,
        optional: true
    }

}));

// Allow
Collections.allow({
    insert: Meteor.userId,
    update: allowIsCollectionAdmin,
    remove: allowIsCollectionAdmin,
    fetch: ['members']
});

// Deny
Collections.deny({});


// HELPERS: Sử dụng Collection Helper
Collections.helpers({

    // Kiểm tra có phải là Public hay không?
    isPublic: function () {
        return this.permission === 'public';
    },

    // Kiểm tra có phải là Private hay ko?
    isPrivate: function () {
        return this.permission === 'private';
    },

    // Lấy link tuyệt đối
    absoluteUrl: function () {
        return Router.path("Collection", {collectionId: this._id, slug: this.slug});
    }
});


// HOOKS
Collections.before.insert(function (userId, doc) {

    // getSlug: Sử dụng thư viện `speakingurl` giúp decode các ngôn ngữ như Chinese, Japan, Vietnam ...
    // thành ko dấu. Mặc định getSlug sẽ return 1 `String empty`
    doc.slug = getSlug(doc.title) || 'collection';

    doc.createdAt = new Date();
    doc.archived = false;
    doc.members = [{
        userId: userId,
        owner: userId,
        isAdmin: true
    }];
    doc.theme = 'default';
});

Collections.before.update(function (userId, doc, fieldNames, modifier) {

    modifier.$set = modifier.$set || {};
    modifier.$set.modifiedAt = new Date();

});

// Xử lý phía Server
isServer(function () {

    // Khi server bắt đầu chạy
    Meteor.startup(function () {
        // Optimize Mongo : http://joshowens.me/how-to-optimize-your-mongo-database-for-meteor-js
        Collections._collection._ensureIndex({
            '_id': 1,
            'members.userId': 1
        }, {unique: true})
    });


});