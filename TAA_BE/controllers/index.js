function index() { }

index.groupProducts = (result) => {
    const groupResult = result.reduce((r, item) => {
    const {
      prod_id, prod_name, prod_cost, prod_discount,
      prod_num_sold, prod_num_avai, prod_num_rating,
      prod_star_rating, prod_description, cate_id,
      cate_name, prod_img_url,
    } = item;
    const found = r.find(v => v.prod_id === prod_id);
    if (found) {
      found.prod_img_urls.push(prod_img_url);
    } else {
      r.push({
        prod_id, prod_name, prod_cost, prod_discount,
        prod_num_sold, prod_num_avai, prod_num_rating,
        prod_star_rating, prod_description, cate_id,
        cate_name, prod_img_urls: [prod_img_url],
      });
    }
    return r;
  }, [])
  return groupResult;
}

index.filter = (result,cate)=>{
  if(!cate) return result;
  const balo = result.filter(v => v.cate_name == cate);
  // console.log("this is balo",balo);
  // console.log("this is result",result);
  return balo;
}






module.exports = index;