import "./RecentFiles.scss"
import { VButton } from "@/shared/UI"
import Image1 from "../../../../shared/assets/img/recent-img/image1.png"
import Image2 from "../../../../shared/assets/img/recent-img/image2.png"
import Image3 from "../../../../shared/assets/img/recent-img/image3.png"
import Image4 from "../../../../shared/assets/img/recent-img/image4.png"
import Image5 from "../../../../shared/assets/img/recent-img/image5.png"

const RecentFiles = () => {
  return (
    <div className="recent-files">
      <div className="recent-files__header">
        <div className="recent-files__header-title">Recent</div>
        <div className="recent-files__header-btn">
          <VButton type="button" title="New" isPlusIcon isBlueColor />
        </div>
      </div>

      <div className="recent-files__content">
        <div className="recent-files__card">
          <div className="recent-files__card-wrap">
            <div className="recent-files__card-icon" />
            <div className="recent-files__card-title">Rating UI design.svg</div>
          </div>
          <div
            className="recent-files__card-preview"
            style={{ backgroundImage: `url(${Image1})` }}
          />
        </div>

        <div className="recent-files__card">
          <div className="recent-files__card-wrap">
            <div className="recent-files__card-icon" />
            <div className="recent-files__card-title">Rating UI design.svg</div>
          </div>
          <div
            className="recent-files__card-preview"
            style={{ backgroundImage: `url(${Image2})` }}
          />
        </div>

        <div className="recent-files__card">
          <div className="recent-files__card-wrap">
            <div className="recent-files__card-icon" />
            <div className="recent-files__card-title">Rating UI design.svg</div>
          </div>
          <div
            className="recent-files__card-preview"
            style={{ backgroundImage: `url(${Image3})` }}
          />
        </div>

        <div className="recent-files__card">
          <div className="recent-files__card-wrap">
            <div className="recent-files__card-icon" />
            <div className="recent-files__card-title">Rating UI design.svg</div>
          </div>
          <div
            className="recent-files__card-preview"
            style={{ backgroundImage: `url(${Image4})` }}
          />
        </div>

        <div className="recent-files__card">
          <div className="recent-files__card-wrap">
            <div className="recent-files__card-icon" />
            <div className="recent-files__card-title">Rating UI design.svg</div>
          </div>
          <div
            className="recent-files__card-preview"
            style={{ backgroundImage: `url(${Image5})` }}
          />
        </div>
      </div>
    </div>
  )
}

export default RecentFiles
