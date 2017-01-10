"use strict";
(function (MessageBarType) {
    MessageBarType[MessageBarType["info"] = 0] = "info";
    MessageBarType[MessageBarType["error"] = 1] = "error";
    MessageBarType[MessageBarType["warning"] = 2] = "warning";
    MessageBarType[MessageBarType["success"] = 3] = "success";
})(exports.MessageBarType || (exports.MessageBarType = {}));
var MessageBarType = exports.MessageBarType;
