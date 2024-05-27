import Company from "~/models/Company";
import Individual from "~/models/Individual";
import User from "~/models/User";

export const pauseCollections = async (customerId: string, subscriptionId: string) => {
    // Find the user by customerId
    const user = await User.findOne({stripeCustomerId: customerId});
    if (!user) return;
    // Update the individual or company's currentCharities to mark the subscription as paused
    switch (user.accountType) {
        case "individual":
            const individual = await Individual.findOne({userId: user._id as string});
            if (!individual) return;
            individual.currentCharities = individual.currentCharities.map((charity) => {
                if (charity.subscriptionId === subscriptionId) {
                    return {...charity, paused: true};
                }
                return charity;
            });
            await individual.save();
            break;
        case "company":
            const company = await Company.findOne({userId: user._id as string});
            if (!company) return;
            company.currentCharities = company.currentCharities.map((charity) => {
                if (charity.subscriptionId === subscriptionId) {
                    return {...charity, paused: true};
                }
                return charity;
            });
            await company.save();
            break;
        default:
            console.log(`Unhandled account type ${user.accountType}`);
    }
}