import mongoose, { Document, Schema } from "mongoose";

export interface INewCampaign extends Document {
	pageTitle: string;
	optIn: string;
	webinar: string;
	download: string;

	affiliateLinkUrl: string;
	downloadButtonText: string;
	buttonTimer: string;
	autoresponder: string;
	listTags: string;
	listTagsObject: any;
	autoresponderFormCode: string;
	webinarPageUrl: string;
	optInButtonText: string;
	socialSharingText: string;
	poster: string;
	posterFull: string;
	pinterestPoster: string;
	pinterestPosterFull: string;
	privacyPolicyLink: string;
	earningsDisclaimerLink: string;
	termsandConditionsLink: string;
	commissionBuilderProduct: string;
	exitPopSettings: { type: Schema.Types.ObjectId; ref: "exit_popup" };
	socialProofPopupSettings: {
		type: Schema.Types.ObjectId;
		ref: "social_proof_popup";
	};
	facebookPixelCode: string;
	isDefaultFacebookPixelCode: boolean;
	facebookCommentsSdkcode: string;
	isDefaultFacebookCommentsSdkCode: boolean;
	facebookCommentsCodeSnippet: string;
	facebookChatWidgetCode: string;
	isDefaultFacebookChatWidgetCode: boolean;

	videoLinkUrl: string;

	OPV: number;
	WPV: number;
	DPV: number;
	CR: number;

	user: { type: Schema.Types.ObjectId; ref: "user" };
}

export type NewCampaignObject = {
	_id?: any | undefined;
	pageTitle?: string | undefined;
	optIn?: string | undefined;
	webinar?: string | undefined;
	download?: string | undefined;

	affiliateLinkUrl?: string | undefined;
	downloadButtonText?: string | undefined;
	buttonTimer?: string | undefined;
	autoresponder?: string | undefined;
	listTags?: string | undefined;
	listTagsObject?: any | undefined;
	autoresponderFormCode?: string | undefined;
	webinarPageUrl?: string | undefined;
	optInButtonText?: string | undefined;
	socialSharingText?: string | undefined;
	poster?: string | undefined;
	posterFull?: string | undefined;
	pinterestPoster?: string | undefined;
	pinterestPosterFull?: string | undefined;
	privacyPolicyLink?: string | undefined;
	earningsDisclaimerLink?: string | undefined;
	termsandConditionsLink?: string | undefined;
	commissionBuilderProduct?: string | undefined;
	exitPopSettings?: any | undefined;
	socialProofPopupSettings?: any | undefined;
	facebookPixelCode?: string | undefined;
	isDefaultFacebookPixelCode?: boolean | undefined;
	facebookCommentsSdkcode?: string | undefined;
	isDefaultFacebookCommentsSdkCode?: boolean | undefined;
	facebookCommentsCodeSnippet?: string | undefined;
	facebookChatWidgetCode?: string | undefined;
	isDefaultFacebookChatWidgetCode?: boolean | undefined;

	videoLinkUrl?: string | undefined;

	OPV?: number | undefined;
	WPV?: number | undefined;
	DPV?: number | undefined;
	CR?: number | undefined;

	user?: any | undefined;

	$and?: NewCampaignObject[] | undefined;
	$or?: NewCampaignObject[] | undefined;
	$inc?: NewCampaignObject | undefined;
};

const NewCampaignSchema: Schema = new Schema({
	pageTitle: { type: Schema.Types.String },
	optIn: { type: Schema.Types.String },
	webinar: { type: Schema.Types.String },
	download: { type: Schema.Types.String },

	affiliateLinkUrl: { type: Schema.Types.String },
	downloadButtonText: { type: Schema.Types.String },
	buttonTimer: { type: Schema.Types.String },
	autoresponder: { type: Schema.Types.String },
	listTags: { type: Schema.Types.String },
	listTagsObject: { type: Schema.Types.Mixed },
	autoresponderFormCode: { type: Schema.Types.String },
	webinarPageUrl: { type: Schema.Types.String },
	optInButtonText: { type: Schema.Types.String },
	socialSharingText: { type: Schema.Types.String },
	poster: { type: Schema.Types.String },
	posterFull: { type: Schema.Types.String },
	pinterestPoster: { type: Schema.Types.String },
	pinterestPosterFull: { type: Schema.Types.String },
	privacyPolicyLink: { type: Schema.Types.String },
	earningsDisclaimerLink: { type: Schema.Types.String },
	termsandConditionsLink: { type: Schema.Types.String },
	commissionBuilderProduct: { type: Schema.Types.String },
	exitPopSettings: { type: Schema.Types.ObjectId, ref: "exit_popup" },
	socialProofPopupSettings: {
		type: Schema.Types.ObjectId,
		ref: "social_proof_popup",
	},
	facebookPixelCode: { type: Schema.Types.String },
	isDefaultFacebookPixelCode: { type: Schema.Types.Boolean },
	facebookCommentsSdkcode: { type: Schema.Types.String },
	isDefaultFacebookCommentsSdkCode: { type: Schema.Types.Boolean },
	facebookCommentsCodeSnippet: { type: Schema.Types.String },
	facebookChatWidgetCode: { type: Schema.Types.String },
	isDefaultFacebookChatWidgetCode: { type: Schema.Types.Boolean },

	videoLinkUrl: { type: Schema.Types.String },

	OPV: { type: Schema.Types.Number, default: 0 },
	WPV: { type: Schema.Types.Number, default: 0 },
	DPV: { type: Schema.Types.Number, default: 0 },
	CR: { type: Schema.Types.Number, default: 0 },

	user: { type: Schema.Types.ObjectId, ref: "user" },
});

export default mongoose.model<INewCampaign>("new_campaign", NewCampaignSchema);
