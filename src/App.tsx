import { Stack, Button } from "@prismane/core";
import NewButton from "./NewButton";

function App() {
  return (
    <Stack w="100vw" h="100vh" align="center" justify="center">
      <Button>Primary Button</Button>
      <Button variant="secondary" color="base">
        Secondary Button
      </Button>
      {/* <NewButton>New Button</NewButton> */}
    </Stack>
  );
}

export default App;
