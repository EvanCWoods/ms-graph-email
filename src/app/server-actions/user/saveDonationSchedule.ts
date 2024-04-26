"use server";
import { redirect } from "next/navigation";

const saveDonationSchedule = async (formData: FormData) => {
    const id = formData.get("id") as string
    const schedule = formData.get("donation-schedule") as string;

    if (!id || !schedule) {
        return;
    }
    redirect(`/register?step=2&id=${id}&schedule=${schedule}`)
}

export default saveDonationSchedule;;