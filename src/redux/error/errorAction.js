import { createAction } from "@reduxjs/toolkit";

const openNotifyError = createAction("error/openNotify");

const closeNotifyError = createAction("error/closeNotify");

export default { openNotifyError, closeNotifyError };
