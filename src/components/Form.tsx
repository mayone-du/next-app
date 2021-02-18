import { TextField, Button } from "@material-ui/core";

const Form: React.FC = () => {
  // const http = require("http");
  // console.log(http);

  return (
    <>
      <form className="container mx-auto py-28">
        <h3>お問合せフォーム</h3>
        <div className="flex flex-col">
        <TextField className="w-40" label="名前（必須）" required variant="outlined" type="text" />
        <TextField className="w-40" label="名前（必須）" required variant="outlined" type="email" />

        </div>
        <Button type="submit" variant="outlined" >Submit</Button>
      </form>
    </>
  );
};

export { Form };
