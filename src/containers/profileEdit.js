/**
 * Created by jaehong on 2017. 5. 22..
 */
import React from 'react';
import ProfileEditForm from '../components/profileEditForm'
import S from 'shorti'

const ProfileEdit = () => {
  return (
    <div style={S('p-20')} className="container">
      <ProfileEditForm/>
    </div>
  );
};

export default ProfileEdit;
