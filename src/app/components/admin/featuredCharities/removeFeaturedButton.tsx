"use client";
import removeFeaturedCharity from "~/app/server-actions/admin/removeFeaturedCharity";

interface IProps {
  id: string;
}

const RemoveFeaturedButton: React.FC<IProps> = ({ id }) => {

  return (
    <div>
          <form action={removeFeaturedCharity}>
              <input type="hidden" name="id" value={id} />
                <button
                  type="submit"
                  className="rounded bg-white px-4 py-2 font-bold text-brand-orange border border-brand-orange hover:shadow-lg"
                >
                  Remove Feature
                </button>
          </form>
    </div>
  );
};

export default RemoveFeaturedButton;