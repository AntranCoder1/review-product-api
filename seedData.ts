import mongoose from "mongoose";
import config from "./config/config";

import * as levelAccessRepo from "./repositories/levelAccess.repo";
import * as nicheSiteRepo from "./repositories/nicheSite.repo";
import * as tutorialRepo from "./repositories/tutorial.repo";

const fs = require("fs");

mongoose.connect(config.DB_URL, {
	useCreateIndex: true,
	useNewUrlParser: true,
});

//#region roleData
const levelAccessArray = [
	{
		_idCustom: "60fe9d8527040333b01gj8Z9",
		name: "Level 1",
		description: "Basic",
		permission: [
			"1 Sub domain",
			"1 Custom Domain",
			"Promote 10 products per month",
			"Syndicate Content Across 50 High Traffic Platforms",
		],
	},
	{
		_idCustom: "60fe9d8727040333b013Lgp2",
		name: "Level 2",
		description: "Unlimited ",
		permission: [
			"Unlimited use",
			"Unlimited Sub domains",
			"Unlimited Custom Domain",
			"Promote unlimited products per month",
		],
	},
	{
		_idCustom: "60fe9d8727040333b01H5i3g",
		name: "Level 3",
		description: "Automated & DFY Bundle ",
		permission: ["Automation is turned ON", "DFY Package"],
	},
	{
		_idCustom: "60fe9d8727040333b01iM0P2",
		name: "Level 4",
		description: "Maximize Profits",
		permission: ["Maximize Profits"],
	},
	{
		_idCustom: "60fe9d8727040333b017G4g3 ",
		name: "Level 5",
		description: "Limitless Traffic",
		permission: ["Limitless Traffic"],
	},
	{
		_idCustom: "60fe9d8827040333b01jF07w",
		name: "Level 6",
		description: "Agency License",
		permission: ["Agency License"],
	},
];
//#endregion

//#region roleData
const NicheSiteArray = [
	{
		name: "Arts & Entertainment",
	},
	{
		name: "Business / Investing",
	},
	{
		name: "Computers / Internet",
	},
	{
		name: "Cooking, Food & Wine",
	},
	{
		name: "E-business & E-marketing",
	},
	{
		name: "Education",
	},
	{
		name: "Employment & Jobs",
	},
	{
		name: "Games",
	},
	{
		name: "Green Products",
	},
	{
		name: "Health & Fitness",
	},
	{
		name: "Home & Garden",
	},
	{
		name: "Languages",
	},
	{
		name: "Mobile",
	},
	{
		name: "Parenting & Families",
	},
	{
		name: "Self-Help",
	},
	{
		name: "Software & Services",
	},
	{
		name: "Spirituality, New Age & Alternative Beliefs",
	},
	{
		name: "Sports",
	},
	{
		name: "Travel",
	},
];
//#endregion

//#region roleData
const TutorialArray = [
	{
		title: "Lanci Overview Video",
		url: "https://player.vimeo.com/video/451163362",
		urlPdf: "",
	},
	{
		title: "How Create ClickBank Account",
		url: "https://player.vimeo.com/video/450038342",
		urlPdf:
			"https://engageleads-launches.s3-us-west-2.amazonaws.com/Online/raiid_pl/tutorials/creating+clickbank+account.pdf",
	},
	{
		title: "How to Create Subdomain",
		url: "https://player.vimeo.com/video/449617722",
		urlPdf:
			"https://engageleads-launches.s3-us-west-2.amazonaws.com/Online/raiid_pl/tutorials/creating+subdomain+on+raiid.pdf",
	},
	{
		title: "FINDING DOMAIN NAMES THAT MATCH CLICKBANK NICHES",
		url: "https://player.vimeo.com/video/450475449",
		urlPdf:
			"https://engageleads-launches.s3-us-west-2.amazonaws.com/Online/raiid_pl/tutorials/finding+domain+names+that+match+with+clickbank+niche.pdf",
	},
	{
		title: "How to customize site appearance on Lanci",
		url: "https://player.vimeo.com/video/451766822",
		urlPdf:
			"https://engageleads-launches.s3-us-west-2.amazonaws.com/Online/raiid_pl/tutorials/how+to+customize+site+appearance+on+raiid.pdf",
	},
	{
		title: "How to search product",
		url: "https://player.vimeo.com/video/449668754",
		urlPdf:
			"https://engageleads-launches.s3-us-west-2.amazonaws.com/Online/raiid_pl/tutorials/how+to+search+a+product+on+raiid.pdf",
	},
	{
		title: "Selecting Suitable Products For You",
		url: "https://player.vimeo.com/video/450466955",
		urlPdf:
			"https://engageleads-launches.s3-us-west-2.amazonaws.com/Online/raiid_pl/tutorials/how+to+choose+the+right+products+for+you.pdf",
	},
	{
		title: "UNDERSTANDING NUMBERS IN CLICKBANK",
		url: "https://player.vimeo.com/video/451163351",
		urlPdf:
			"https://engageleads-launches.s3-us-west-2.amazonaws.com/Online/raiid_pl/tutorials/understanding+clickbank+numbers.pdf",
	},
	{
		title: "HOW TO CHOOSE AND ADD FEED POSTS",
		url: "https://player.vimeo.com/video/451112286",
		urlPdf:
			"https://engageleads-launches.s3-us-west-2.amazonaws.com/Online/raiid_pl/tutorials/how+to+choose+and+add+feed+post.pdf",
	},
	{
		title: "How to Search for products that actually sell",
		url: "https://player.vimeo.com/video/450093489",
		urlPdf:
			"https://engageleads-launches.s3-us-west-2.amazonaws.com/Online/raiid_pl/tutorials/how+to+search+for+products+that+actually+sell.pdf",
	},
	{
		title: "Adding promotional banner on site appearance",
		url: "https://player.vimeo.com/video/452095393",
		urlPdf: "",
	},
	{
		title:
			"Finding RSS Feeds URL and using it instantly on the Post research page",
		url: "https://player.vimeo.com/video/452448802",
		urlPdf: "",
	},
	{
		title: "Finding RSS Feed URLs outside Lanci",
		url: "https://player.vimeo.com/video/452198219",
		urlPdf: "",
	},
	{
		title: "How to Manually add Feed URLs",
		url: "https://player.vimeo.com/video/451112188",
		urlPdf:
			"https://engageleads-launches.s3-us-west-2.amazonaws.com/Online/raiid_pl/tutorials/how+to+manually+add+feed+URLs.pdf",
	},
];
//#endregion

async function seedLevelAccess() {
	console.log("------------------------------------");
	console.log("start insert level access------------------>");
	let i = 0;
	for (const item of levelAccessArray) {
		i++;
		await levelAccessRepo
			.create({
				_idCustom: item._idCustom,
				name: item.name,
				description: item.description,
				permission: item.permission,
			})
			.then(
				(data) => {
					console.log("create default level access success");
				},
				(reason) => {
					console.error(reason);
				}
			);
	}
	console.log(
		"end insert level access------------------>: " +
			i +
			" / " +
			levelAccessArray.length
	);
	return 1;
}

async function updateSeedLevelAccess() {
	console.log("------------------------------------");
	console.log("start insert level access------------------>");
	let i = 0;
	const levelAccess = await levelAccessRepo.getMany();
	for (const item of levelAccessArray) {
		i++;
		const objMap = levelAccess.find((x) => x.name == item.name);
		await levelAccessRepo
			.updateOne(objMap?._id, {
				description: item.description,
				permission: item.permission,
			})
			.then(
				(data) => {
					console.log("Update default level access success");
				},
				(reason) => {
					console.error(reason);
				}
			);
	}
	console.log(
		"end insert level access------------------>: " +
			i +
			" / " +
			levelAccessArray.length
	);
	return 1;
}

async function seedNicheSite() {
	console.log("------------------------------------");
	console.log("start insert Niche Site------------------>");
	let i = 0;
	for (const item of NicheSiteArray) {
		i++;
		await nicheSiteRepo.create({ name: item.name }).then(
			(data) => {
				console.log("create default Niche Site success");
			},
			(reason) => {
				console.error(reason);
			}
		);
	}
	console.log(
		"end insert Niche Site------------------>: " +
			i +
			" / " +
			NicheSiteArray.length
	);
	return 1;
}

async function seedTutorial() {
	console.log("------------------------------------");
	console.log("start insert Tutorial------------------>");
	let i = 0;
	for (const item of TutorialArray) {
		i++;
		await tutorialRepo
			.create({ title: item.title, url: item.url, urlPdf: item.urlPdf })
			.then(
				(data) => {
					console.log("create default Tutorial success");
				},
				(reason) => {
					console.log(reason);
				}
			);
	}
	console.log(
		"end insert Tutorial------------------>: " +
			i +
			" / " +
			TutorialArray.length
	);
	return 1;
}

// npm run build
// node ./build/seedData

seedLevelAccess();
// seedNicheSite();
// seedTutorial();
// updateSeedLevelAccess();
