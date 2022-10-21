// let payload: any = {
// 	"Sagaing Region": [
// 		{
// 			level_3: "Yinmabin",
// 		},
// 		{
// 			level_3: "Tamu",
// 		},
// 	],
// 	Kachin: [
// 		{
// 			level_3: "Chipwi",
// 		},
// 		{
// 			level_3: "Shwegu",
// 		},
// 	],
// };

// let objArr = Object.keys(payload);
// console.log(objArr);
// let tempArr: any = [];
// for (let index = 0; index < objArr.length; index++) {
// 	const element: any = objArr[index];
// 	let subTempData: any = {
// 		label: element,
// 		options: [],
// 	};
// 	for (let subIndex = 0; subIndex < payload[element].length; subIndex++) {
// 		const subElem = payload[element][subIndex];
// 		if (subIndex === 0) {
// 			subTempData.options.push(
// 				{
// 					value: element,
// 					label: element,
// 				},
// 				{
// 					value: subElem.level_3,
// 					label: subElem.level_3,
// 				}
// 			);
// 		} else {
// 			subTempData.options.push({
// 				value: subElem.level_3,
// 				label: subElem.level_3,
// 			});
// 		}
// 	}
// 	tempArr.push(subTempData);
// }

// let result = [
// 	{
// 		label: "Sagaing Region",
// 		options: [
// 			{ value: "Sagaing Region", label: "Sagaing Region" },
// 			{ value: "Yinmabin", label: "Yinmabin" },
// 			{ value: "Tamu", label: "Tamu" },
// 		],
// 	},
// 	{
// 		label: "Kachin",
// 		options: [
// 			{ value: "Kachin", label: "Kachin" },
// 			{ value: "Chipwi", label: "Chipwi" },
// 			{ value: "Shwegu", label: "Shwegu" },
// 		],
// 	},
// ];

// console.log(tempArr);
// console.log(result);
