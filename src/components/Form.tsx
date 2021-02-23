import { TextField, Button } from "@material-ui/core";

const Form: React.FC = () => {
  
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log("submit")
  };
  return (
    <>
      <form
        method="POST"
        className="container mx-auto py-28"
      >
        <h3>お問合せフォーム</h3>
        <div>
          <h4>送信結果</h4>
          <div className="my-2"></div>
        </div>
        <div className="flex flex-col">
          <TextField
            className="w-40"
            label="名前（必須）"
            required
            variant="outlined"
            type="text"
          />
          <TextField
            className="w-40"
            label="名前（必須）"
            required
            variant="outlined"
            type="email"
          />
        </div>
        <Button type="submit" variant="outlined" onSubmit={() => {handleSubmit}}>
          Submit
        </Button>
      </form>
    </>
  );
};

export { Form };
