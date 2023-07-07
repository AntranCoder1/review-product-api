var CronJobManager = require("cron-job-manager");
import * as subDomainRepo from "../repositories/subDomain.repo";
import * as automationRepo from "../repositories/automation.repo";
import * as automationController from "../controllers/automation.controller";

const manager = new CronJobManager();

export const createAllAuto = async () => {
	const automations = await automationRepo.getAll();
	// const automations = await automationRepo.getMany(
	// 	{ subDomain: "6146e7ee278d984da863ef2a" },
	// 	0,
	// 	10
	// );

	for (let item of automations) {
		const existedSubDomain = await subDomainRepo.getOne({
			_id: item.subDomain,
		});
		if (item.timeRange == 4) {
			manager.add(
				item._id.toString(),
				"0 */4 * * *",
				async () => {
					console.log(item._id + " tick - what should be executed?");
					const addTimes = item.noOfPosts ? item.noOfPosts : 1;
					const createRes = await automationController.createPostAuto(
						item.keyword,
						item.noOfPosts,
						existedSubDomain,
						item._id,
						addTimes
					);

					// automationRepo
					// 	.updateOne(item._id, {
					// 		lastAdded: new Date(),
					// 		$inc: { times: addTimes },
					// 	})
					// 	.then((res) => {});
				},
				{
					start: true,
					timeZone: "America/Los_Angeles",
					onComplete: () => {
						console.log(item._id + " has stopped....");
					},
				}
			);
		}
		if (item.timeRange == 1) {
			manager.add(
				item._id.toString(),
				"0 0 */1 * *",
				async () => {
					console.log(item._id + " tick - what should be executed?");
					const addTimes = item.noOfPosts ? item.noOfPosts : 1;
					automationController.createPostAuto(
						item.keyword,
						item.noOfPosts,
						existedSubDomain,
						//update automation
						item._id,
						addTimes
					);

					// automationRepo
					// 	.updateOne(item._id, {
					// 		lastAdded: new Date(),
					// 		$inc: { times: addTimes },
					// 	})
					// 	.then((res) => {});
				},
				{
					start: true,
					timeZone: "America/Los_Angeles",
					onComplete: () => {
						console.log(item._id + " has stopped....");
					},
				}
			);
		}
		if (item.timeRange == 7) {
			manager.add(
				item._id.toString(),
				"0 0 */7 * *",
				() => {
					console.log(item._id + " tick - what should be executed?");
					const addTimes = item.noOfPosts ? item.noOfPosts : 1;
					automationController.createPostAuto(
						item.keyword,
						item.noOfPosts,
						existedSubDomain,
						item._id,
						addTimes
					);
					// const addTimes = item.noOfPosts ? item.noOfPosts : 1;
					// automationRepo
					// 	.updateOne(item._id, {
					// 		lastAdded: new Date(),
					// 		$inc: { times: addTimes },
					// 	})
					// 	.then((res) => {});
				},
				{
					start: true,
					timeZone: "America/Los_Angeles",
					onComplete: () => {
						console.log(item._id + " has stopped....");
					},
				}
			);
		}
	}
};

export const createAuto = async (automationId: any) => {
	console.log("++++++++++Cron");
	const item = await automationRepo.getOne({ _id: automationId, status: true });
	const existedSubDomain = await subDomainRepo.getOne({
		_id: item?.subDomain,
	});
	if (!item) {
		return 0;
	}
	if (item?.timeRange == 4) {
		new CronJobManager(
			item?._id.toString(),
			"0 */4 * * *",
			() => {
				console.log(item?._id + " tick - what should be executed?");
				const addTimes = item.noOfPosts ? item.noOfPosts : 1;
				automationController.createPostAuto(
					item?.keyword,
					item?.noOfPosts,
					existedSubDomain,
					item._id,
					addTimes
				);

				// automationRepo
				// 	.updateOne(item._id, {
				// 		lastAdded: new Date(),
				// 		$inc: { times: addTimes },
				// 	})
				// 	.then((res) => {});
			},
			{
				start: true,
				timeZone: "America/Los_Angeles",
				onComplete: () => {
					console.log(item?._id + " has stopped....");
				},
			}
		);
	}
	if (item?.timeRange == 1) {
		new CronJobManager(
			item?._id.toString(),
			"0 0 */1 * *",
			() => {
				console.log(item?._id + " tick - what should be executed?");
				const addTimes = item.noOfPosts ? item.noOfPosts : 1;
				automationController.createPostAuto(
					item?.keyword,
					item?.noOfPosts,
					existedSubDomain,
					item._id,
					addTimes
				);
				// const addTimes = item.noOfPosts ? item.noOfPosts : 1;
				// automationRepo
				// 	.updateOne(item._id, {
				// 		lastAdded: new Date(),
				// 		$inc: { times: addTimes },
				// 	})
				// 	.then((res) => {});
			},
			{
				start: true,
				timeZone: "America/Los_Angeles",
				onComplete: () => {
					console.log(item?._id + " has stopped....");
				},
			}
		);
	}
	if (item?.timeRange == 7) {
		new CronJobManager(
			item?._id.toString(),
			"0 0 */7 * *",
			() => {
				console.log(item?._id + " tick - what should be executed?");
				const addTimes = item.noOfPosts ? item.noOfPosts : 1;
				automationController.createPostAuto(
					item?.keyword,
					item?.noOfPosts,
					existedSubDomain,
					item._id,
					addTimes
				);
				// const addTimes = item.noOfPosts ? item.noOfPosts : 1;
				// automationRepo
				// 	.updateOne(item._id, {
				// 		lastAdded: new Date(),
				// 		$inc: { times: addTimes },
				// 	})
				// 	.then((res) => {});
			},
			{
				start: true,
				timeZone: "America/Los_Angeles",
				onComplete: () => {
					console.log(item?._id + " has stopped....");
				},
			}
		);
	}
};

export const deleteAuto = async (automationId: any) => {
	console.log("-----------Cron");
	manager.stop(automationId);
};
