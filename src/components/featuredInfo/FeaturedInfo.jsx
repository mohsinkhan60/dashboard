import "./FeaturedInfo.css";
import SouthIcon from "@mui/icons-material/South";
import NorthIcon from '@mui/icons-material/North';

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            -11.4 <SouthIcon className="featuredIcon negative" />
          </span>
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <SouthIcon className="featuredIcon negative" />
          </span>
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +11.4 <NorthIcon className="featuredIcon" />
          </span>
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div>
    </div>
  );
};
export default FeaturedInfo;
