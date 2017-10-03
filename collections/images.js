Images = new FS.Collection("images",{
   stores: [new FS.Store.FileSystem("images")]
});


Images.allow({
    insert: function (userId, doc) {
      return true;
    },
    download: function (userId) {
        return true;
    }
  });
