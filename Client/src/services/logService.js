// import * as Sentry from "@sentry/react";
import { toast } from "react-toastify";

function init() {
  // Sentry.init({
  //   dsn:
  //     "https://4a8f550edf7a44479460985288b31e2f@o505193.ingest.sentry.io/5593064",
  //   release: "my-project-name@1-0-0",
  //   tracesSampleRate: 1.0,
  // });
}

function log(error) {
  toast.error("an unexpeted error occured !");
  console.log(error);
  // Sentry.captureException(error);
}

// eslint-disable-next-line
export default { init, log };
