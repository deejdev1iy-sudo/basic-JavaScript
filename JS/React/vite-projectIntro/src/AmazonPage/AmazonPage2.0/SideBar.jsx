import FilterList from "./FilterList";

function SideBar() {
    return(
        <div
          style={{
            display: 'flex',
            width: '400px',
            flexDirection: 'column',
          }}
        >
          <FilterList title={"Condition"} options={['New', 'Used', 'Renewed']} />
          <FilterList title={"Material"} options={['Plastic', 'Rubber', 'Pvc', 'Allot Stel', 'Aluminium']}/>
          <FilterList  title={"Uses"} options={['Exercise', 'Speed And Endurance', 'Boxing', 'Body Building', 'Martial Arts']}/>
          <FilterList title={"Brand"} options={['Cross Rope', 'Venum', 'Sport Bit', 'Canon Sprot', 'Adidas']} />
        </div>
    );
}

export default SideBar;