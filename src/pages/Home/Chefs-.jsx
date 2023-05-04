<div>
<div className='our-chefs container'>
    <h4 className='text-center fw-bold mt-5 text-white'>Our Chefs</h4>
    <div className='chefs-item-container'>
        <div className='text-dark row row-cols-1 row-cols-sm-2 row-cols-lg-3 gap-sm-1 gap-md-4 w-100 mx-auto pt-5 px-4'>
            {
                chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
            }
        </div>
    </div>
</div>
</div>