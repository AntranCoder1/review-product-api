import NewCampaignTemplate, {
	INewCampaignTemplate,
} from "../models/newCampaignTemplate.model";

export const createNewCampaignTemplate = (data: any) => {
	const newData: INewCampaignTemplate = new NewCampaignTemplate({
		name: data.name,
		optIn: data.optIn,
		webinar: data.webinar,
		download: data.download,
		image: data.image,
	});
	return newData.save();
};

export const getList = () => {
	return NewCampaignTemplate.find();
};
