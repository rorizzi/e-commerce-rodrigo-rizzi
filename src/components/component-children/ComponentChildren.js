//Al pasarle children, lo que encerramos dentro del tag ComponentChildren en App.js se hace visible!!!
const ComponentChildren = ({children, otherProp}) => {
  return <>
    <h3>{otherProp}</h3>
    {children}
  </>;
};

export default ComponentChildren;
