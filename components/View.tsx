import { client } from "@/sanity/lib/client"
import Ping from "./Ping"
import { STARTUPS_VIEWS_QUERY } from "@/sanity/lib/queries"

const View = async ({ id }: { id: string }) => {

    const data = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUPS_VIEWS_QUERY, { id });

console.log("Fetched data:", data);

const { views: totalViews } = data || { views: 0 };

return (
    <div className="view-container">
        <div className="absolute -top-2 -right-2">
            <Ping />
        </div>

        <p className="view-text">
            <span className="font-black"></span>{totalViews} views
        </p>
    </div>
)
}

export default View