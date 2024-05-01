/* eslint-disable @typescript-eslint/no-empty-interface */
import mongoose from "mongoose";


const feedbackSchema = new mongoose.Schema({

    satisfaction: {
      type: String,
      required: true,
    },
    explanation: {
      type: String,
      required: false,
    },
  });
  
  export interface IFeedback {
    satisfaction: string;
    explanation: string;
  }
  
  export interface IFeedbackDocument extends IFeedback, mongoose.Document {}
  export interface IFeedbackModel extends mongoose.Model<IFeedbackDocument> {}
  

  const Feedback: IFeedbackModel =
    mongoose.models.Feedback ?? mongoose.model<IFeedbackDocument>("Feedback", feedbackSchema);
  
  export default Feedback;