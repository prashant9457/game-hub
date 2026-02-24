import usePlatforms from "@/hooks/usePlatforms";
import { Button, Box } from "@chakra-ui/react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder: string;
}
const SortSelector = ({onSelectSortOrder, sortOrder}: Props) => {

    const SortOrders = [
        {value: '' , label: 'Relevance'},
        {value: '-added' , label: 'Date added'},
        {value: 'name' , label: 'Name'},
        {value: '-released' , label: 'Release date'},
        {value: '-metacritic' , label: 'Popularity'},
        {value: '-rating' , label: 'Average Rating'}
    ]
  const { data, error } = usePlatforms();
  if(error) return null;
    const currentSortOrder = SortOrders.find(order => order.value === sortOrder);
  return (
    <Listbox>
      <ListboxButton as={Button} variant="surface">
        Order by: {currentSortOrder?.label || 'Relevance'}
        {/* @ts-ignore */}
        <BsChevronDown/>
      </ListboxButton>
      
      <ListboxOptions 
        as={Box}
        anchor="bottom start"
        bg="bg.panel"
        boxShadow="md"
        borderRadius="md"
        p={2}
        mt={1}
        zIndex={1000}
      >
        {SortOrders.map((order) => (
            <ListboxOption 
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value} value={order.value}
            as={Box}
            p={2}
            borderRadius="sm"
            cursor="pointer"
            _hover={{ bg: "bg.muted" }}
            css={{ 
              "&[data-selected]": { fontWeight: "bold" }
            }}
            >
                {order.label}
            </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};

export default SortSelector;
