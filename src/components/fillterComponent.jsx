import DropdownButton from "./DropdownButton";
import UniversalButton from "./UniversalButton";

const FillterComponent = () => {
  return (
    <div className="bg-white rounded-lg p-7 mx-auto max-w-[1136px]">
      <div></div>
      <div>
        <UniversalButton />
        <UniversalButton />
        <UniversalButton />
        <DropdownButton type="compra" />
      </div>
      <DropdownButton />
    </div>
  );
};

export default FillterComponent;
