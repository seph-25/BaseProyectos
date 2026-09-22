function useRegister() {

  function handleIncrement() {
    setCount((prev) => prev + 1)
  }

  return {
    handleIncrement
  }

} export default useRegister;

