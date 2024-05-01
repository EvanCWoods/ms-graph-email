"use server";

import Feedback from "~/models/Feedback";
import dbConnect from "~/utils/dbConnect";

const saveFeedback = async (formData: FormData) => {
  await dbConnect();

  const satisfaction = formData.get("satisfaction") as string;
  const explanation = formData.get("explanation") as string;

const feedback = new Feedback({
    satisfaction: satisfaction,
    explanation: explanation
})
  await feedback.save();
};

export default saveFeedback;
