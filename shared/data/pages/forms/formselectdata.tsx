
import { useState } from "react";
import dynamic from "next/dynamic";
const Creatable = dynamic(() => import("react-select/creatable"), { ssr: false });

interface Selectdata {
	value: string;
	label: string;
}
export const Multipleselectdata = [
	{ value: "Choice 1", label: "Choice 1" },
	{ value: "Choice 2", label: "Choice 2" },
	{ value: "Choice 3", label: "Choice 3" },
	{ value: "Choice 4", label: "Choice 4" },
	{ value: "Choice 5", label: "Choice 5" },
	{ value: "Choice 6", label: "Choice 6", disabled: 'true' },
];

export const Multipleselectdata1: Selectdata[] = [
	{ value: "Choice 1", label: "Choice 1" },
	{ value: "Choice 2", label: "Choice 2" },
	{ value: "Choice 3", label: "Choice 3" },
	{ value: "Choice 4", label: "Choice 4" }
];

const Group1: Selectdata[] = [
	{ value: "Montreal", label: "Montreal" },
	{ value: "Toronto", label: "Toronto" },
	{ value: "Vancouver", label: "Vancouver" }
];

const Group2: Selectdata[] = [
	{ value: "Paris", label: "Paris" },
	{ value: "Lyon", label: "Lyon" },
	{ value: "Marseille", label: "Marseille" },
];

const Group3: Selectdata[] = [
	{ value: "Madrid", label: "Madrid" },
	{ value: "Barcelona", label: "Barcelona" },
	{ value: "Malaga", label: "Malaga" },

];

const Group4: Selectdata[] = [
	{ value: "London", label: "London" },
	{ value: "Manchester", label: "Manchester" },
	{ value: "Liverpool", label: "Liverpool" },
];

const Group5 = [
	{ value: "New York", label: "New York" },
	{ value: "Washington", label: "Washington", isDisabled: "isDisabled" },
	{ value: "Michigan", label: "Michigan" },
];

const groupeddata = [
	{ label: "CA", options: Group1 },
	{ label: "FR", options: Group2 },
	{ label: "SP", options: Group3 },
	{ label: "UK", options: Group4 },
	{ label: "US", options: Group5 }
];
export function MultiGroup() {

	const [selected, setSelected] = useState<any>([]);

	return (
		<div>
			<Creatable isMulti classNamePrefix="Select2" options={groupeddata} value={selected} onChange={setSelected} placeholder="Choose a city" />
		</div>
	);
}
export function SingleGroup() {

	const [selected, setSelected] = useState<any>([]);

	return (
		<div>
			<Creatable classNamePrefix="Select2" options={groupeddata} value={selected} onChange={setSelected} placeholder="Choose a city" />
		</div>
	);
}

export const Optionwithnosearch: Selectdata[] = [
	{ value: "Label One", label: "Label One" },
	{ value: "Label Two", label: "Label Two" },
	{ value: "Label Three", label: "Label Three" },
	{ value: "Label Four", label: "Label Four" },
	{ value: "Label Five", label: "Label Five" },
	{ value: "Label Six", label: "Label Six" },
];

