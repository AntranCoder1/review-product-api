import Tutorial, { ITutorial, TutorialObject } from "../models/Tutorial.model";

export const create = (data: TutorialObject) => {
	const newData: ITutorial = new Tutorial(data);
	return newData.save();
};

export const getMany = () => {
	return Tutorial.find();
};
