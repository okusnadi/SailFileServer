/**
 * FilesController
 *
 * @description :: Server-side logic for managing files
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    upload: function(req, res) {

        res.setTimeout(0);

        req.file('avatar')
            .upload({

                // You can apply a file upload limit (in bytes)
                //maxBytes: 1000000

            }, function whenDone(err, uploadedFiles) {
                if (err) return res.serverError(err);
                else return res.json({
                    files: uploadedFiles,
                    textParams: req.params.all()
                });
            });
    }
};
