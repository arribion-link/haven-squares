
const Stats = () => {
    // Start 1
    const stat11Color = {
        backgroundColor: "#e0f7fa"
    }
    const stat12Color = {
        backgroundColor: "#0097a7"
    }

    // Start 1
     const stat21Color = {
        backgroundColor: "#e8f5e9"
    }
    const stat22Color = {
        backgroundColor: "#388e3c"
    }

    // // Start 1
    //  const stat31Color = {
    //     backgroundColor: " #e3f2fd"
    // }
    // const stat32Color = {
    //     backgroundColor: "#0097a7"
    // }

    // Start 1
     const stat41Color = {
        backgroundColor: "#e0f7fa"
    }
    const stat42Color = {
        backgroundColor: "  #7b1fa2"
    }

    // Start 1
     const stat51Color = {
        backgroundColor: "#fff3e0"
    }
    const stat52Color = {
        backgroundColor: "#f57c00"
    }

    // Start 1
     const stat61Color = {
        backgroundColor: " #ffebee"
    }
    const stat62Color = {
        backgroundColor: "#d32f2f"
    }
  return (
    <section className="stats-grid">
                <div className="stats-card">
                    <div className="card-icon" style={stat11Color}><i className="fa-solid fa-hotel" style={stat12Color}></i></div>
                    <h3>Total Properties</h3>
                    <p>38</p>
                </div>
                <div className="stats-card">
                    <div className="card-icon" style={stat21Color}><i className="fa-solid fa-user-check" style={stat22Color}></i></div>
                    <h3>Active Tenants</h3>
                    <p>124</p>
                </div>
                <div className="stats-card">
                    <div className="stats-card"></div>
                    <div className="card-icon" style={stat41Color}><i className="fa-solid fa-percent" style={stat42Color}></i></div>
                    <h3>Occupancy Rate</h3>
                    <p>87.5%</p>
                </div>
                <div className="stats-card">
                    <div className="card-icon" style={stat51Color}><i className="fa-solid fa-file-invoice-dollar" style={stat52Color}></i></div>
                    <h3>Outstanding</h3>
                    <p>$38,000</p>
                </div>
                 <div className="stats-card">
                    <div className="card-icon" style={stat61Color}><i className="fa-solid fa-wrench" style={stat62Color}></i></div>
                    <h3>Maintenance</h3>
                    <p>2 Pending</p>
                </div>
            </section>

  )
}

export default Stats
