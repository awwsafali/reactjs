import React from "react";

export default function Navbar() {
    return (
        <header>
            <nav class="navbar py-2 px-4 navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img width={162} height={43} src="https://www.anytimefitness.co.nz/wp-content/uploads/2022/05/NEW_LOGO.png" alt="" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Pricing</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button className="fw-semibold border-0 rounded-pill px-md-5 px-2 py-1 btn-purple py-3">Try For Free</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}