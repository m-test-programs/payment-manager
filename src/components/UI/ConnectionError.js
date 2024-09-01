import React from "react";
import CustomDialog from "./CustomDialog";
import useStore from "../../store/store";

function ConnectionError() {
  const connectionError = useStore((store) => store.connectionError);
  const message = useStore((store) => store.connectionErrorMessage);

  const setConnectionError = useStore((store) => store.setConnectionError);

  return (
    <CustomDialog
      open={connectionError}
      fullWidth
      onClose={() => setConnectionError(false)}
      title="Connection error"
      actions={[
        {
          title: "Close",
          click: () => setConnectionError(false),
        },
      ]}
    >
      <p>It seems that a connection error has occurred.</p>
      <p>
        Please ensure that the connection to the server is established and try
        again.
      </p>
      <p>Code: {message?.code} </p>
      <p>Message: {message?.message}</p>
    </CustomDialog>
  );
}

export default ConnectionError;
