import { useState } from "react"
import { VModal } from "@/shared/ui"
import "./Table.scss"
import {
  ITableContentMock,
  TableContentMockTypeEnum,
  TableContentMockOwnerColorEnum,
} from "../../types"
import { InfoModal } from "../../components"

const Table = () => {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState<boolean>(false)
  const [currentInfo, setCurrentInfo] = useState<ITableContentMock | null>(null)
  const content: ITableContentMock[] = [
    {
      id: 1,
      created_at: "12 Feb 2022",
      type: TableContentMockTypeEnum.FOLDER,
      name: "Defect images",
      tag: "#defect",
      owner_name: "Shuichi Akai",
      owner_short: "SA",
      owner_color: TableContentMockOwnerColorEnum.RED,
      updated_at: "1 days ago",
    },

    {
      id: 2,
      created_at: "14 Feb 2022",
      type: TableContentMockTypeEnum.FOLDER,
      name: "Assets",
      tag: "#3dgltf",
      owner_name: "Shuichi Akai",
      owner_short: "SA",
      owner_color: TableContentMockOwnerColorEnum.RED,
      updated_at: "2 days ago",
    },

    {
      id: 3,
      created_at: "19 Feb 2022",
      type: TableContentMockTypeEnum.FOLDER,
      name: "UI files",
      tag: "#figmafiles",
      owner_name: "Jodie Starling",
      owner_short: "JS",
      owner_color: TableContentMockOwnerColorEnum.ORANGE,
      updated_at: "5 days ago",
    },

    {
      id: 4,
      created_at: "27 Feb 2022",
      type: TableContentMockTypeEnum.FOLDER,
      name: "Documentation",
      tag: "#document",
      owner_name: "Shuichi Akai",
      owner_short: "SA",
      owner_color: TableContentMockOwnerColorEnum.ORANGE,
      updated_at: "8 days ago",
    },

    {
      id: 5,
      created_at: "13 Mar 2022",
      type: TableContentMockTypeEnum.IMAGE,
      name: "3d credit card .jpg",
      tag: "#3ddesign",
      owner_name: "Furuya Rei",
      owner_short: "FR",
      owner_color: TableContentMockOwnerColorEnum.PURPLE,
      updated_at: "14 days ago",
    },

    {
      id: 6,
      created_at: "13 Mar 2022",
      type: TableContentMockTypeEnum.IMAGE,
      name: "panel 1 image.jpg",
      tag: "#bgn",
      owner_name: "Furuya Rei",
      owner_short: "FR",
      owner_color: TableContentMockOwnerColorEnum.PURPLE,
      updated_at: "14 days ago",
    },

    {
      id: 7,
      created_at: "06 Apr 2022",
      type: TableContentMockTypeEnum.DOCUMENT,
      name: "branding details.doc",
      tag: "#branding",
      owner_name: "James Black",
      owner_short: "JB",
      owner_color: TableContentMockOwnerColorEnum.GREEN,
      updated_at: "24 days ago",
    },

    {
      id: 8,
      created_at: "07 May 2022",
      type: TableContentMockTypeEnum.TABLE,
      name: "store 1 dataset.csv",
      tag: "#storedataset",
      owner_name: "Furuya Rei",
      owner_short: "FR",
      owner_color: TableContentMockOwnerColorEnum.PURPLE,
      updated_at: "1 month ago",
    },

    {
      id: 9,
      created_at: "11 Jul 2022",
      type: TableContentMockTypeEnum.VIDEO,
      name: "promotion video.mp4",
      tag: "#promotion",
      owner_name: "Furuya Rei",
      owner_short: "FR",
      owner_color: TableContentMockOwnerColorEnum.PURPLE,
      updated_at: "2 month ago",
    },

    {
      id: 10,
      created_at: "12 Jul 2022",
      type: TableContentMockTypeEnum.DOCUMENT,
      name: "Not you lyrics.doc",
      tag: "#lyrics",
      owner_name: "Andre Camel",
      owner_short: "AC",
      owner_color: TableContentMockOwnerColorEnum.ORANGE,
      updated_at: "2 month ago",
    },
  ]

  const findInfoById = (id: number) => {
    setCurrentInfo(
      content.find((item: ITableContentMock) => item.id === id) ?? null
    )
    setIsInfoModalOpen(true)
  }

  return (
    <div>
      <div className="table">
        <div className="table__header">
          <div className="table__row">
            <div className="table__col --name">Asset Name</div>
            <div className="table__col --tag">Tag</div>
            <div className="table__col --timestamp">Created At</div>
            <div className="table__col --owner">Owner</div>
            <div className="table__col --modified">Last Modified</div>
            <div className="table__col --menu" />
          </div>
        </div>
        <div className="table__body">
          <div className="table__body-container">
            {content.map((item: any) => (
              <div
                className="table__row"
                key={item.id}
                onClick={() => findInfoById(item.id)}
              >
                <div className="table__col --name">
                  <div className="disk__table-wrapper">
                    <div
                      className={`disk__table-image ${
                        item.type ? "--" + item.type : ""
                      }`}
                    />
                    <div className="disk__table-title">{item.name}</div>
                  </div>
                </div>
                <div className="table__col --tag">
                  <div className="disk__table-desc">{item.tag}</div>
                </div>
                <div className="table__col --timestamp">
                  <div className="disk__table-desc">{item.created_at}</div>
                </div>
                <div className="table__col --owner">
                  <div className="disk__table-wrapper">
                    <div
                      className={`disk__table-short ${
                        item.owner_color ? "--" + item.owner_color : ""
                      }`}
                    >
                      {item.owner_short}
                    </div>
                    <div className="disk__table-name">{item.owner_name}</div>
                  </div>
                </div>
                <div className="table__col --modified">
                  <div className="disk__table-desc">{item.updated_at}</div>
                </div>
                <div className="table__col --menu">
                  <div className="disk__table-menu" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <VModal
        isOpen={isInfoModalOpen}
        closeModal={() => setIsInfoModalOpen(false)}
      >
        <InfoModal
          fileInfo={currentInfo}
          closeModal={() => setIsInfoModalOpen(false)}
        />
      </VModal>
    </div>
  )
}

export default Table
