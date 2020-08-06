import React, { Component } from "react";
import { Col, Row, Nav } from "react-bootstrap";

let navData = [
  {
    name: "link",
  },
  {
    name: "link",
  },
  {
    name: "link",
  },
  {
    name: "link",
  },
  {
    name: "link",
  },
  {
    name: "link",
  },
];

class NavBar extends Component {
  render() {
    return (
      <div className="top-navbar-class">
        <Row className="navRow-class">
          <Col md={2} style={{}}>
            <div className="Logo-div-wrapper">
              <img
                width="100px "
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACnCAMAAACco5HoAAAARVBMVEX///+cnZ3m5ub29/e9vr7Nzs6foKDv7++7u7uhoqL8/PysrKywsbH4+Pju7u7Z2dmnqKjIycnS0tLh4eHX19e0tbXDxMSi2mKjAAAFHElEQVR4nO2d6XarIBRG40QUJxT1/R/1xnBASGx7D01Xada3fzWCA7tMwml6uQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA74gs3hX5cld5lb0r4/BiV/q3S/STqPy1strfLtCPUr7UVdX8dnl+FDW+Ulb528X5YSrI+n8giwFkMYAsBpDFALIYQBYDyGIAWQwgiwFkMYAsBpDFALIYQBYDyGIAWQwgiwFkMYAsBinIaro7H+2jCdW2e7L6cO+oUZ9l+DyVQwqy6uJ+9vU0sVknPdwyyCGfa3WSQbT1rK/ycinyuXzKINptya/71fNl60TcA1oSlyW6eTiCDPqxfqoezaYLl6HQZehDTflxusynM9v/T+KyyjyMx7hWD8XtxiLIUMwqSO2D1H7s4h7RkLasun+8hZyDutXlj8EtclSfpebfsZWyLFE+ubqxeA1tPYlsGZyO7iyS4zu2UpZ1FFb2R3iUPO7SHjakDaAqXHKzuHP6wmmXS/yomLCsZqbCyrzaysn147mbY9gMl2KcSsoxiYfL3i48b+U2X23eOu4ps6RlrbZ4c7sLUBt9ljZgrqXqIrWZU6jbcKCPemOrXb7ux5rVfY57yixlWY19tJHKL0qqKrZqzeRqtFVNdNUxs12ldUUHbKuWaxZJurJsoF1+jG5kh7ql7sHdA2Fm7z6XOe4xU5ZFNUMenVCmTLuT1f3QZDL02+lFGxoo9eG60ebQENvFpyuLnmzwh3rtCbBFz89n5WvxrHIzsovYdpiurNETY5nIzy7Qzhs+iI8+E3MmkEO6ssjF7L/sdebYdTdgB8sPqkllGunVP12YU2Rs/Hm6sqhgk3+spaqxT5U26q5NimgcRg/NwcJgc9NyZWwPn64sc8kiaDJqOG5E/XthUtrKsd0bLvVoY3BN27TjnvMPy6InpymmF6NuphKQBVmQxeHT0TAYuVpz7D4a2uHOpDzJCpOJtx0N7dTBn26vniz7pmjSn2RR/3/1p2nqbIRlkK4sercLJqW26e066mCedR8NtSeLLno2KY1epElXFtWVoLTUZd3XIewMfnk8xchqT5qcbZqxf7yWriy7WuX9qVln3633D4J6a6/ovixhFy2OZLeOEbsjlq4sReNZ4d6k3aqBqWz09uetE/uyss1k7t2qhZhIf+yrYcKyxEard7bXaqiwdjXUziMKtz0WyKL1nMtQG1uipvx99OZhurKO7YhxXxcWbUXDX29vY5+9H2lZufJlZQslD/f3H7XZnaAliyUhWUXtobxmIwddVWNuN2jcMrutWhd51UtVzbSlYWV1botCzy7x9juJ3wtLSFbwLQf76G57rT3N24Q/emxvD1ZKl8XKEpP0Ut2PU3zAQ0Kyni+lTvZQvW3DW7d2cuZFW5tuL80/fflGuEPSsk52nIvJn9E3dnvM47q5HO3yuKV97AS9n6ysDSM7ZF6Gmw2i1mHtkXr1mlkzhTKLx7gSHonLug1ino2heo6wav2gol5voQ1Re1E2xUnEEovUZWVC1feRTObj1p6VVai10ntzHfS0PlcctQfDfZjKIwVZmXjmLPnLC0SlMkhC1l8BshhAFgPIYgBZDCCLAWQxgCwGkMUAshhAFgPIYgBZDCCLAWQxgCwGkMUAshhAFoOXytpesM6dMGJ+pSx8xTmH9/0/Azeal37D+Y0lOlAseSr9dfGZ9Pm78vp/+AEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgL/FPxGDbnZ/XIMsAAAAAElFTkSuQmCC"
              />
            </div>
          </Col>
          <Col md={8} style={{ display: "flex", justifyContent: "end" }}>
            <Nav className="nav-ul-wrapper-class" style={{}}>
              {navData.length !== 0 &&
                navData.map((navlink) => (
                  <Nav.Link href="#home">{navlink.name.toUpperCase()}</Nav.Link>
                ))}
            </Nav>
          </Col>
          <Col md={2} style={{ display: "flex" }}>
            <Nav
              className="nav-ul-wrapper-class"
              style={{ flexWrap: "nowrap" }}
            >
              <Nav.Link href="#home">icon</Nav.Link>
              <Nav.Link href="#home">smth</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </div>
    );
  }
}

export default NavBar;
