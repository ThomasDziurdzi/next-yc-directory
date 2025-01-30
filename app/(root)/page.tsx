import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: { 
    searchParams: Promise<{ query?: string }> }) {

    const query = (await searchParams).query

    const posts = [{
        _createdAt: new Date(),
        views: 55,
        author: {_id:1, name: 'Adrian'},
        _id: 1,
        description: 'This is a description',
        image: 'https://media.istockphoto.com/id/1354827837/fr/photo/humain-comme-un-robot-dans-une-posture-pensive.jpg?s=612x612&w=0&k=20&c=IUh05s6L68FrS-5FwHO6c5xS9b_MlZ4Or7T4DemJn3E=',
        category: "Robots",
        title: "We Robots"
    },
]

    return (
        <>
            <section className="pink_container">
                <h1 className="heading">
                    Pitch Your Startup, <br />
                    Connect With Entrepreneurs
                </h1>

                <p className="sub-heading !max-w-3xl">
                    Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
                </p>

                <SearchForm query ={query}/>
            </section>

            <section  className="section_container">
                <p className="text-30-semibold">
                    {query ? `Search results for ${query}` : 'All Startups'}
                </p>

                <ul className="mt-7 card_grid">
                {posts?.length > 0 ? (
                    posts.map((post: StartupCardType, index: number) => (
                        <StartupCard key={post?._id} post={post}/>
                    ))
                ): (
                    <p className="no-results">No startups found</p>
                )}
                </ul>
            </section>
        </>
    )
}