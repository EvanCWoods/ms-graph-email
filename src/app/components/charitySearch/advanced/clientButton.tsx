"use client"

const RefreshButton =() => {
    return (
            <button className="w-1/2 border border-brand-orange rounded-lg bg-white px-6 py-1 text-brand-orange hover:shadow-lg" onClick={() => window.location.replace("/charity-search/advanced-search")}>Clear Filters</button>
    )

}
export default RefreshButton