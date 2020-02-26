import React from 'react'
import { User } from '~/lib/data'
import styled from 'styled-components'
import { Colors } from '~/lib/style-guide'
import { memo } from '~/lib/memo'

interface Props {
  user: User
}

export const UserLabel = memo(function UserLabel({ user }: Props) {
  return (
    <Holder>
      <ImagesHolder>
        <CompanyImage
          style={{ backgroundImage: `url(${user.companyLogoUrl})` }}
        />
        <AvatarImage style={{ backgroundImage: `url(${user.avatarUrl})` }} />
      </ImagesHolder>
      <UserNameLabel>{user.fullName}</UserNameLabel>
      <PositionNameLabel>{user.positionName}</PositionNameLabel>
    </Holder>
  )
})

const Holder = styled.div`
  display: flex;
`

const IMAGES_OVERLAY_OFFSET = 8
const IMAGE_SIZE = 22

const ImagesHolder = styled.div`
  display: flex;
  padding-right: ${IMAGES_OVERLAY_OFFSET}px;
  margin-right: 10px;
`

const AvatarImage = styled.div`
  width: ${IMAGE_SIZE}px;
  height: ${IMAGE_SIZE}px;
  border-radius: ${IMAGE_SIZE / 2}px;

  margin-right: ${-IMAGES_OVERLAY_OFFSET}px;
  background-size: cover;
  background-position: center;
`

const CompanyImage = styled(AvatarImage)`
  border: 1px solid ${Colors.BG1};
  box-sizing: border-box;
`

const UserNameLabel = styled.div`
  margin-right: 8px;
`

const PositionNameLabel = styled.div`
  opacity: 0.6;
`
