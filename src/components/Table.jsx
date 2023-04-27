/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF, useTexture } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { useConfigurator } from "../contexts/Configurator";

import { useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import { Vector3 } from 'three';

const ANIM_SPEED = 12;

export function Table(props) {
  const {
    tableWidth,
    tableHeight,
    tableDepth,

    tableColor,
    tablePicture,

    repeatTablePictureX,
    repeatTablePictureY,

    legsWidth,
    legsHeight,

    legs,
    legsColor,
    legsPicture,

    repeatLegsPictureX,
    repeatLegsPictureY,
  } = useConfigurator();

  const plate = useRef();

  const leftLegsTop = useRef();
  const lefttLegsBottom = useRef();

  const rightLegsTop = useRef();
  const rightLegsBottom = useRef();

  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, -legsHeight / 100, 0),
    new THREE.Vector3(0, 0, 0),
  ]);

  useEffect(() => {
    initPlateTexture();
  }, [tableColor, tablePicture, repeatTablePictureX, repeatTablePictureY]);

  useEffect(() => {
    initLegsTexture();
  }, [legsColor, repeatLegsPictureX, repeatLegsPictureY,]);

  useFrame((_state, delta) => {
    const tableWidthScale = tableWidth / 100;
    const tableHeightScale = tableHeight / 100;
    const tableDepthScale = tableDepth / 100;

    const targetPosition = new Vector3(0, tableDepthScale / 2, 0);
    plate.current.position.lerp(targetPosition, delta * ANIM_SPEED);

    const targetScale = new Vector3(tableWidthScale, tableDepthScale, tableHeightScale, 1);
    plate.current.scale.lerp(targetScale, delta * ANIM_SPEED);

    const endPosition = legsWidth / 100;

    const targetPositionLeftTop = new Vector3(tableWidthScale / 2 - endPosition, 0, tableHeightScale / 2 - endPosition);
    leftLegsTop.current?.position.lerp(targetPositionLeftTop, delta * ANIM_SPEED);

    const targetPositionLeftBottom = new Vector3(tableWidthScale / 2 - endPosition, 0, -tableHeightScale / 2 + endPosition);
    lefttLegsBottom.current?.position.lerp(targetPositionLeftBottom, delta * ANIM_SPEED);

    const targetPositionRightTop = new Vector3(-tableWidthScale / 2 + endPosition, 0, tableHeightScale / 2 - endPosition);
    rightLegsTop.current?.position.lerp(targetPositionRightTop, delta * ANIM_SPEED);

    const targetPositionRightBottom = new Vector3(-tableWidthScale / 2 + endPosition, 0, -tableHeightScale / 2 + endPosition);
    rightLegsBottom.current?.position.lerp(targetPositionRightBottom, delta * ANIM_SPEED);

  });

  const texturePlate = useTexture(tablePicture);
  const textureLegs = useTexture(legsPicture);

  const initPlateTexture = () => {
    texturePlate.wrapS = THREE.RepeatWrapping;
    texturePlate.wrapT = THREE.RepeatWrapping;
    texturePlate.repeat.set(repeatTablePictureX, repeatTablePictureY);
  }

  const initLegsTexture = () => {
    textureLegs.wrapS = THREE.RepeatWrapping;
    textureLegs.wrapT = THREE.RepeatWrapping;
    textureLegs.repeat.set(repeatLegsPictureX, repeatLegsPictureY);
  }

  return (
    <group {...props} dispose={null}>
      <mesh ref={plate}>
        <boxGeometry />
        <meshStandardMaterial color={tableColor} map={texturePlate} />
      </mesh>

      <mesh ref={leftLegsTop} rotation-y={Math.PI * 0.25}>
        <tubeGeometry args={[curve, 10, legsWidth / 100, legs]} />
        <meshStandardMaterial color={legsColor} map={textureLegs} />
      </mesh>

      <mesh ref={lefttLegsBottom} rotation-y={Math.PI * 0.25}>
        <tubeGeometry args={[curve, 10, legsWidth / 100, legs]} />
        <meshStandardMaterial color={legsColor} map={textureLegs} />
      </mesh>

      <mesh ref={rightLegsTop} rotation-y={Math.PI * 0.25}>
        <tubeGeometry args={[curve, 10, legsWidth / 100, legs]} />
        <meshStandardMaterial color={legsColor} map={textureLegs} />
      </mesh>

      <mesh ref={rightLegsBottom} rotation-y={Math.PI * 0.25}>
        <tubeGeometry path={curve} args={[curve, 10, legsWidth / 100, legs]} />
        <meshStandardMaterial color={legsColor} map={textureLegs} />
      </mesh>
    </group>
  );
}
