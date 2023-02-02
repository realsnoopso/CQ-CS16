function test(): () => void {
  return {
    snoop: dog,
  };
}

function dog() {
  return {
    snoop: dog,
  };
}
