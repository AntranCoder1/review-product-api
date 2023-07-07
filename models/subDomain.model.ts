import mongoose, { Document, Schema } from "mongoose";
import { type } from "os";

export interface ISubDomain extends Document {
	subDomainName: string;
	siteTitle: string;
	clickBankId: string;
	nicheSite: { type: Schema.Types.ObjectId; ref: "niche_site" };
	domainUrl: string;
	layout: string;

	logoUrl: string;
	logoUrlFull: string;

	faviconUrl: string;
	faviconUrlFull: string;

	siteBio: string;
	bodyColor: string;
	headerColor: string;
	showSidebar: boolean;
	showFooter: boolean;
	showNavigation: boolean;

	facebookLink: string;
	pinterestLink: string;
	twitterLink: string;
	linkedinLink: string;
	instagramLink: string;
	youtubeLink: string;
	vimeoLink: string;

	authorImage: string;
	authorImageFull: string;
	authorImageUrl: string;
	authorName: string;
	authorDescription: string;

	disclaimerHeading: string;
	disclaimerDescription: string;
	buyNowImage: string;
	buyNowImageFull: string;

	keywords: string;
	description: string;
	analyticsCode: string;

	user: { type: Schema.Types.ObjectId; ref: "user" };

	block: [];
}

export type SubDomainObject = {
	_id?: any | undefined;
	subDomainName?: string | undefined;
	siteTitle?: string | undefined;
	clickBankId?: string | undefined;
	nicheSite?: any | undefined;
	domainUrl?: string | undefined;

	layout?: string | undefined;

	logoUrl?: string | undefined;
	logoUrlFull?: string | undefined;

	faviconUrl?: string | undefined;
	faviconUrlFull?: string | undefined;

	siteBio?: string | undefined;
	bodyColor?: string | undefined;
	headerColor?: string | undefined;
	showSidebar?: boolean | undefined;
	showFooter?: boolean | undefined;
	showNavigation?: boolean | undefined;

	facebookLink?: string | undefined;
	pinterestLink?: string | undefined;
	twitterLink?: string | undefined;
	linkedinLink?: string | undefined;
	instagramLink?: string | undefined;
	youtubeLink?: string | undefined;
	vimeoLink?: string | undefined;

	authorImage?: string | undefined;
	authorImageFull?: string | undefined;
	authorName?: string | undefined;
	authorDescription?: string | undefined;

	disclaimerHeading?: string | undefined;
	disclaimerDescription?: string | undefined;
	buyNowImage?: string | undefined;
	buyNowImageFull?: string | undefined;

	keywords?: string | undefined;
	description?: string | undefined;
	analyticsCode?: string | undefined;
	user?: any | undefined;
	$and?: [SubDomainObject] | undefined;

	block?: any | undefined;
};

const SubDomainSchema: Schema = new Schema(
	{
		subDomainName: { type: Schema.Types.String },
		siteTitle: { type: Schema.Types.String },
		clickBankId: { type: Schema.Types.String },
		nicheSite: { type: Schema.Types.ObjectId, ref: "niche_site" },
		domainUrl: { type: Schema.Types.String },

		layout: { type: Schema.Types.String, default: "layout1" },

		logoUrl: { type: Schema.Types.String },
		logoUrlFull: { type: Schema.Types.String },

		faviconUrl: { type: Schema.Types.String },
		faviconUrlFull: { type: Schema.Types.String },

		siteBio: { type: Schema.Types.String },
		bodyColor: { type: Schema.Types.String },
		headerColor: { type: Schema.Types.String },
		showSidebar: { type: Schema.Types.Boolean, default: true },
		showFooter: { type: Schema.Types.Boolean, default: true },
		showNavigation: { type: Schema.Types.Boolean, default: true },

		facebookLink: { type: Schema.Types.String },
		pinterestLink: { type: Schema.Types.String },
		twitterLink: { type: Schema.Types.String },
		linkedinLink: { type: Schema.Types.String },
		instagramLink: { type: Schema.Types.String },
		youtubeLink: { type: Schema.Types.String },
		vimeoLink: { type: Schema.Types.String },

		authorImage: { type: Schema.Types.String },
		authorImageFull: { type: Schema.Types.String },
		authorName: { type: Schema.Types.String },
		authorDescription: { type: Schema.Types.String },

		disclaimerHeading: { type: Schema.Types.String },
		disclaimerDescription: { type: Schema.Types.String },
		buyNowImage: { type: Schema.Types.String },
		buyNowImageFull: { type: Schema.Types.String },

		keywords: { type: Schema.Types.String },
		description: { type: Schema.Types.String },
		analyticsCode: { type: Schema.Types.String },

		user: { type: Schema.Types.ObjectId, ref: "user" },

		block: [{ blockId: { type: Schema.Types.ObjectId, ref: "block" } }],
	},
	{ timestamps: true }
);

export default mongoose.model<ISubDomain>("sub_domain", SubDomainSchema);
