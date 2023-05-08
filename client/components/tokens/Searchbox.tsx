import React, {FC} from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

type Props = {
  onChange: (arg:any) => void;
  value: string;
}

const SearchBox:FC<Props> = ({onChange, value}) => {
  return (
    <InputGroup>
      <InputLeftElement children={<SearchIcon color="gray" />} />
      <Input
        bgColor={"white"}
        variant="outline"
        placeholder={`Search`}
        borderColor={"gray"}
        _focusVisible={{
          borderColor: "primary",
        }}
        onChange={onChange}
        value={value}
      />
    </InputGroup>
  );
};

export default SearchBox;
