import React from 'react';
import Navigation from '../components/Navigation';
import ButtonsBottom from '../components/ButtonsBottom';
import Logo from '../components/Logo';
import Project from '../components/Project';
import Mouse from '../components/Mouse';

export const Couple = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={0} />
        <ButtonsBottom left={'/'} right={'/Bapteme'} />
      </div>
    </main>
  );
};



export const Bapteme = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={1} />
        <ButtonsBottom left={"/Couple"} right={"/Bapteme"} />
      </div>
    </main>
  );
};


export const Mariage = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={2} />
        <ButtonsBottom left={"/Bapteme"} right={"/Grosesse"} />
      </div>
    </main>
  );
};



export const Grosesse = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={3} />
        <ButtonsBottom left={"/Mariage"} right={"/Bebe"} />
      </div>
    </main>
  );
};


export const Bebe = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={4} />
        <ButtonsBottom left={"/Grosesse"} right={"/Famille"} />
      </div>
    </main>
  );
};



export const Famille = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={5} />
        <ButtonsBottom left={"/Bebe"} right={"/Contact"} />
      </div>
    </main>
  );
};


export const tarifs = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={7} />
        <ButtonsBottom left={"/prestations"} right={"/Contact"} />
      </div>
    </main>
  );
};