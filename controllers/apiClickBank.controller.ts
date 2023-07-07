import console from "console";
import { Request, Response } from "express";
import config from "../config/config";
var request = require("request");

export const search = (req: Request, res: Response) => {
	const searchText = req.body.searchText ? req.body.searchText : "";
	const itemGravity = req.body.itemGravity;
	const itemIntialDSale = req.body.itemIntialDSale;
	const itemAvgDSale = req.body.itemAvgDSale;
	const itemAvgRebill = req.body.itemAvgRebill;
	const itemAvgPerSale = req.body.itemAvgPerSale;
	const itemPerRebill = req.body.itemPerRebill;
	const language = req.body.language;
	const sortBy = req.body.sortBy;
	const maxResult = req.body.maxResult;
	const page = req.body.page;

	let gravityEnabled = "false";
	let gravityType = "HIGHER";
	let gravityV1 = "";
	let gravityV2 = "";
	if (typeof itemGravity == "string" && itemGravity != "") {
		gravityEnabled = "true";
		if (itemGravity.indexOf(">") > -1) {
			const tmpArr = itemGravity.split(">");
			gravityType = "HIGHER";
			gravityV1 = tmpArr[1];
		}
		if (itemGravity.indexOf("<") > -1) {
			const tmpArr = itemGravity.split("<");
			gravityType = "LOWER";
			gravityV2 = tmpArr[1];
		}
		if (itemGravity.indexOf("-") > -1) {
			const tmpArr = itemGravity.split("-");
			gravityType = "BETWEEN";
			gravityV1 = tmpArr[0];
			gravityV2 = tmpArr[1];
		}
	}

	let initialEarningsPerSaleEnabled = "false";
	let initialEarningsPerSaleType = "HIGHER";
	let initialEarningsPerSaleV1 = "";
	let initialEarningsPerSaleV2 = "";
	if (typeof itemIntialDSale == "string" && itemIntialDSale != "") {
		initialEarningsPerSaleEnabled = "true";
		if (itemIntialDSale.indexOf(">") > -1) {
			const tmpArr = itemIntialDSale.split(">");
			initialEarningsPerSaleType = "HIGHER";
			initialEarningsPerSaleV1 = tmpArr[1];
		}
		if (itemIntialDSale.indexOf("<") > -1) {
			const tmpArr = itemIntialDSale.split("<");
			initialEarningsPerSaleType = "LOWER";
			initialEarningsPerSaleV2 = tmpArr[1];
		}
		if (itemIntialDSale.indexOf("-") > -1) {
			const tmpArr = itemIntialDSale.split("-");
			initialEarningsPerSaleType = "BETWEEN";
			initialEarningsPerSaleV1 = tmpArr[0];
			initialEarningsPerSaleV2 = tmpArr[1];
		}
	}

	let averageEarningsPerSaleEnabled = "false";
	let averageEarningsPerSaleType = "HIGHER";
	let averageEarningsPerSaleV1 = "";
	let averageEarningsPerSaleV2 = "";
	if (typeof itemAvgDSale == "string" && itemAvgDSale != "") {
		averageEarningsPerSaleEnabled = "true";
		if (itemAvgDSale.indexOf(">") > -1) {
			const tmpArr = itemAvgDSale.split(">");
			averageEarningsPerSaleType = "HIGHER";
			averageEarningsPerSaleV1 = tmpArr[1];
		}
		if (itemAvgDSale.indexOf("<") > -1) {
			const tmpArr = itemAvgDSale.split("<");
			averageEarningsPerSaleType = "LOWER";
			averageEarningsPerSaleV2 = tmpArr[1];
		}
		if (itemAvgDSale.indexOf("-") > -1) {
			const tmpArr = itemAvgDSale.split("-");
			averageEarningsPerSaleType = "BETWEEN";
			averageEarningsPerSaleV1 = tmpArr[0];
			averageEarningsPerSaleV2 = tmpArr[1];
		}
	}

	let futureEarningsEnabled = "false";
	let futureEarningsType = "HIGHER";
	let futureEarningsV1 = "";
	let futureEarningsV2 = "";
	if (typeof itemAvgRebill == "string" && itemAvgRebill != "") {
		futureEarningsEnabled = "true";
		if (itemAvgRebill.indexOf(">") > -1) {
			const tmpArr = itemAvgRebill.split(">");
			futureEarningsType = "HIGHER";
			futureEarningsV1 = tmpArr[1];
		}
		if (itemAvgRebill.indexOf("<") > -1) {
			const tmpArr = itemAvgRebill.split("<");
			futureEarningsType = "LOWER";
			futureEarningsV2 = tmpArr[1];
		}
		if (itemAvgRebill.indexOf("-") > -1) {
			const tmpArr = itemAvgRebill.split("-");
			futureEarningsType = "BETWEEN";
			futureEarningsV1 = tmpArr[0];
			futureEarningsV2 = tmpArr[1];
		}
	}

	const productLanguages = language ? language : "";

	const resultsPerPage = maxResult ? maxResult : 10;

	const sortField = sortBy ? sortBy : "";

	console.log(
		`${config.apiClickBankUrl}/marketplace?c_token=${config.apiClickBankToken}&advanced=true&mainCategoryId=&subCategoryId=&gravityEnabled=${gravityEnabled}&gravityType=${gravityType}&gravityV1=${gravityV1}&gravityV2=${gravityV2}&futureEarningsEnabled=${futureEarningsEnabled}&futureEarningsType=${futureEarningsType}&futureEarningsV1=${futureEarningsV1}&futureEarningsV2=${futureEarningsV2}&initialEarningsPerSaleEnabled=${initialEarningsPerSaleEnabled}&initialEarningsPerSaleType=${initialEarningsPerSaleType}&initialEarningsPerSaleV1=${initialEarningsPerSaleV1}&initialEarningsPerSaleV2=${initialEarningsPerSaleV2}&averageEarningsPerSaleEnabled=${averageEarningsPerSaleEnabled}&averageEarningsPerSaleType=${averageEarningsPerSaleType}&averageEarningsPerSaleV1=${averageEarningsPerSaleV1}&averageEarningsPerSaleV2=${averageEarningsPerSaleV2}&activatedEnabled=false&activatedType=BEFORE&activatedV1=&activatedV2=&productLanguages=${productLanguages}&productAttributes=&productTypes=&requireAffiUrl=false&requireSpotlight=false&mobileEnabled=false&whitelistVendor=false&includeKeywords=${searchText}&requireAnalyticsStats=false&resultsPerPage=${resultsPerPage}&sortField=${sortField}&_sort=on&sortReverse=true`
	);
	request(
		{
			method: "get",
			url: `${config.apiClickBankUrl}/marketplace?c_token=${config.apiClickBankToken}&advanced=true&mainCategoryId=&subCategoryId=&gravityEnabled=${gravityEnabled}&gravityType=${gravityType}&gravityV1=${gravityV1}&gravityV2=${gravityV2}&futureEarningsEnabled=${futureEarningsEnabled}&futureEarningsType=${futureEarningsType}&futureEarningsV1=${futureEarningsV1}&futureEarningsV2=${futureEarningsV2}&initialEarningsPerSaleEnabled=${initialEarningsPerSaleEnabled}&initialEarningsPerSaleType=${initialEarningsPerSaleType}&initialEarningsPerSaleV1=${initialEarningsPerSaleV1}&initialEarningsPerSaleV2=${initialEarningsPerSaleV2}&averageEarningsPerSaleEnabled=${averageEarningsPerSaleEnabled}&averageEarningsPerSaleType=${averageEarningsPerSaleType}&averageEarningsPerSaleV1=${averageEarningsPerSaleV1}&averageEarningsPerSaleV2=${averageEarningsPerSaleV2}&activatedEnabled=false&activatedType=BEFORE&activatedV1=&activatedV2=&productLanguages=${productLanguages}&productAttributes=&productTypes=&requireAffiUrl=false&requireSpotlight=false&mobileEnabled=false&whitelistVendor=false&includeKeywords=${searchText}&requireAnalyticsStats=false&resultsPerPage=${resultsPerPage}&sortField=${sortField}&_sort=on&sortReverse=true`,
			headers: {
				"content-type": "application/json",
				page: page,
			},
			json: true,
		},
		function (error: any, response: any, body: any) {
			if (!error && response.statusCode == 200) {
				return res.status(200).send({ data: response.body.result, body });
			}
			if (error) {
				return res.status(400).json({ error });
			}
			if (response) {
				return res.status(200).send({ data: response.body.result, response });
			}
		}
	);
};

export const searchAuto = (keyword: string) => {
	const searchText = keyword;

	let gravityEnabled = "false";
	let gravityType = "HIGHER";
	let gravityV1 = "";
	let gravityV2 = "";

	let initialEarningsPerSaleEnabled = "false";
	let initialEarningsPerSaleType = "HIGHER";
	let initialEarningsPerSaleV1 = "";
	let initialEarningsPerSaleV2 = "";

	let averageEarningsPerSaleEnabled = "false";
	let averageEarningsPerSaleType = "HIGHER";
	let averageEarningsPerSaleV1 = "";
	let averageEarningsPerSaleV2 = "";

	let futureEarningsEnabled = "false";
	let futureEarningsType = "HIGHER";
	let futureEarningsV1 = "";
	let futureEarningsV2 = "";

	const productLanguages = "";

	const resultsPerPage = 50;

	const sortField = "";

	request(
		{
			method: "get",
			url: `${config.apiClickBankUrl}/marketplace?c_token=${config.apiClickBankToken}&advanced=true&mainCategoryId=&subCategoryId=&gravityEnabled=${gravityEnabled}&gravityType=${gravityType}&gravityV1=${gravityV1}&gravityV2=${gravityV2}&futureEarningsEnabled=${futureEarningsEnabled}&futureEarningsType=${futureEarningsType}&futureEarningsV1=${futureEarningsV1}&futureEarningsV2=${futureEarningsV2}&initialEarningsPerSaleEnabled=${initialEarningsPerSaleEnabled}&initialEarningsPerSaleType=${initialEarningsPerSaleType}&initialEarningsPerSaleV1=${initialEarningsPerSaleV1}&initialEarningsPerSaleV2=${initialEarningsPerSaleV2}&averageEarningsPerSaleEnabled=${averageEarningsPerSaleEnabled}&averageEarningsPerSaleType=${averageEarningsPerSaleType}&averageEarningsPerSaleV1=${averageEarningsPerSaleV1}&averageEarningsPerSaleV2=${averageEarningsPerSaleV2}&activatedEnabled=false&activatedType=BEFORE&activatedV1=&activatedV2=&productLanguages=${productLanguages}&productAttributes=&productTypes=&requireAffiUrl=false&requireSpotlight=false&mobileEnabled=false&whitelistVendor=false&includeKeywords=${searchText}&requireAnalyticsStats=false&resultsPerPage=${resultsPerPage}&sortField=${sortField}&_sort=on&sortReverse=true`,
			headers: {
				"content-type": "application/json",
			},
			json: true,
		},
		function (error: any, response: any, body: any) {
			if (!error && response.statusCode == 200) {
				return { data: response.body.result, body };
			}
			if (error) {
				throw error;
			}
			if (response) {
				return { data: response.body.result, response };
			}
		}
	);
};
