"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
mongoose_1.default.set("strictQuery", true);
mongoose_1.default
    .connect("mongodb://127.0.0.1:27017/note-app")
    .then(function () {
    console.log("DB connected!");
})
    .catch(function (err) {
    console.log(err);
});
