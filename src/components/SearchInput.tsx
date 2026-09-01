import { Input, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import useGameQueryStore from "@/store";


const SearchInput = () => {
    const ref = useRef<HTMLInputElement>(null);
    const setSearchText = useGameQueryStore((s) => s.setSearchText);
  return (
    <form onSubmit={(event) => {
        event.preventDefault();
        if(ref.current) setSearchText(ref.current.value);
    }}>
        {/* @ts-ignore */}
        <InputGroup startElement={<BsSearch />}>
          <Input ref={ref} borderRadius="full" placeholder="Search games..." />
        </InputGroup>
    </form>
  );
};

export default SearchInput;