import { Button, ButtonProps } from "@prismane/core";

const NewButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Button px={24} py={16} br={0} {...props}>
      {children}
    </Button>
  );
};

export default NewButton;
