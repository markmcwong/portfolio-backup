import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import ReactDOM from 'react-dom';
import { useInView } from 'react-intersection-observer';

const transition = {
  delay: 0.5,
  times: [0, 1.5],
};

const transition2 = {
  delay: 1.25,
  times: [0, 1.5],
};

const transition3 = {
  delay: 2,
  times: [0, 1.5],
};

const transition4 = {
  delay: 2,
  times: [0, 1],
  duration: 1.5,
};

const DesktopScreen = ({}) => {
  const controls = useAnimation();
  const iconControls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      iconControls.start('hidden');
      iconControls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        flex: 1,
        width: '100%',
        justifyContent: 'end',
        padding: '5vw',
        gridTemplateColumns: '100%',
        minWidth: '300px',
      }}
    >
      {/*<motion.svg
        style={{ gridColumn: '1', gridRow: '1', zIndex: '1' }}
        xmlns="http://www.w3.org/2000/svg"
        height="12vh"
        viewBox="0 0 394 356"
        transition={transition2}
        animate={iconControls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: '-10vh', x: '-5vw', rotate: -30 },
          hidden: { opacity: 0, y: '10vh', x: '10vw' },
        }}
      >
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g id="sketch-symbol" fill-rule="nonzero">
            <polygon
              id="Path"
              fill="#FDB300"
              points="85.790323 11.7151549 196.602823 0 307.415323 11.7151549 393.205645 126.881084 196.602823 355.823009 0 126.881084"
            />
            <g id="Group" transform="translate(0.000000, 126.881084)">
              <polygon
                id="Path"
                fill="#EA6C00"
                points="79.634 0 196.603 228.942 0 0"
              />
              <polygon
                id="Path"
                fill="#EA6C00"
                transform="translate(294.903968, 114.471000) scale(-1, 1) translate(-294.903968, -114.471000) "
                points="276.236468 0 393.205468 228.942 196.602468 0"
              />
              <polygon
                id="Path"
                fill="#FDAD00"
                points="79.634 0 313.572 0 196.603 228.942"
              />
            </g>
            <g id="Group">
              <polygon
                id="Path"
                fill="#FDD231"
                points="196.603 0 85.79 11.715 79.634 126.881"
              />
              <polygon
                id="Path"
                fill="#FDD231"
                transform="translate(255.086896, 63.440500) scale(-1, 1) translate(-255.086896, -63.440500) "
                points="313.571396 0 202.758396 11.715 196.602396 126.881"
              />
              <polygon
                id="Path"
                fill="#FDAD00"
                transform="translate(350.310468, 69.298000) scale(-1, 1) translate(-350.310468, -69.298000) "
                points="307.414968 126.881 393.205968 11.715 387.048968 126.881"
              />
              <polygon
                id="Path"
                fill="#FDAD00"
                points="0 126.881 85.79 11.715 79.634 126.881"
              />
              <polygon
                id="Path"
                fill="#FEEEB7"
                points="196.603 0 79.634 126.881 313.572 126.881"
              />
            </g>
          </g>
        </g>
      </motion.svg>
      */}
      <motion.div
        style={{ gridColumn: '1', gridRow: '1', zIndex: '1' }}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <svg
          id="Capa_1"
          enableBackground="new 0 0 497 497"
          // height="100%"
          viewBox="0 0 497 497"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="m275.57 401-84.14 30-3.19 11.15c-4.53 15.87-21.74 28.85-38.24 28.85v7.5h174.5z"
              fill="#adaca7"
            />
            <path
              d="m308.76 442.15-11.76-41.15-48.5-30-48.5 30-8.57 30h84.14l3.19 11.15c4.53 15.87 21.74 28.85 38.24 28.85l15 7.5 15-7.5c-16.5 0-33.71-12.98-38.24-28.85z"
              fill="#8f8f8b"
            />
            <path
              d="m437 401h30c16.5 0 30-13.5 30-30v-60l-60-60z"
              fill="#adaca7"
            />
            <path
              d="m0 371c0 16.5 13.5 30 30 30h407c16.5 0 30-13.5 30-30v-180l-467 120z"
              fill="#cbc9c2"
            />
            <path
              d="m467 11h-30l30 300h30v-270c0-16.5-13.5-30-30-30z"
              fill="#404242"
            />
            <path
              d="m467 41c0-16.5-13.5-30-30-30h-407c-16.5 0-30 13.5-30 30v270h467v-30l-218.5-120.013z"
              fill="#565959"
            />
            <path
              d="m467 40.995-29.994-.021c0 .005-188.506 120.013-188.506 120.013s188.502 120.011 188.5 120.013c0 0 29.999-.02 29.999-.02.001 0-.002-239.981.001-239.985z"
              fill="#4b88d5"
            />
            <path
              d="m437 40.995-406.912-.022c-.025.012-.046 240.022-.088 240.027 0 0 406.98-.02 406.99-.02.005 0-.032-239.981.01-239.985z"
              fill="#69a7ff"
            />
            <circle cx="248.5" cy="356" fill="#fff" r="15" />
            <path
              d="m403.5 486h-310c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h310c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z"
              fill="#8f8f8b"
            />
          </g>
        </svg>
      </motion.div>
      <motion.svg
        style={{ gridColumn: '1', gridRow: '1', zIndex: '2' }}
        height="22.5%"
        viewBox="0 0 512 512"
        enableBackground="new 0 0 497 497"
        transition={transition}
        animate={iconControls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: '85%', x: '50%' },
          hidden: { opacity: 0, y: 125, x: '50%' },
        }}
      >
        <path
          fill="#5ADAFD"
          d="M512,256c0,84.344-40.793,159.159-103.717,205.803c-26.342,19.519-56.56,34.105-89.287,42.381
	C298.841,509.294,277.744,512,256,512s-42.851-2.706-63.007-7.816c-32.726-8.276-62.945-22.862-89.287-42.392
	C40.782,415.148,0,340.334,0,256C0,114.615,114.615,0,256,0S512,114.615,512,256z"
        />
        <g>
          <path
            fill="#F2F2F2"
            d="M408.545,400.144c-1.202-8.056-2.79-16.353-4.754-24.837c-1.735-7.45-3.751-15.047-6.039-22.758
		c-6.019-20.25-13.949-41.294-23.562-62.568c-4.211-9.3-8.746-18.641-13.584-27.972c-4.263-8.223-8.756-16.457-13.49-24.639
		c-4.723-8.192-9.592-16.196-14.597-24.001c-5.653-8.85-11.473-17.439-17.429-25.736c-13.605-18.965-27.867-36.362-42.402-51.702
		c-5.527-5.841-11.097-11.379-16.687-16.593c-6.363-5.956-12.758-11.483-19.143-16.551c-41.681-33.092-78.994-43.029-105.085-27.972
		c-26.091,15.067-36.143,52.349-28.327,105.002c1.191,8.056,2.79,16.353,4.765,24.837c1.714,7.45,3.73,15.047,6.029,22.758
		c6.019,20.25,13.949,41.305,23.573,62.568c4.201,9.3,8.735,18.63,13.573,27.961c4.263,8.234,8.767,16.457,13.49,24.649
		c4.723,8.192,9.592,16.196,14.597,24.001c5.663,8.861,11.483,17.45,17.429,25.746c13.605,18.965,27.867,36.352,42.402,51.691
		c5.528,5.841,11.107,11.389,16.697,16.603c6.363,5.956,12.758,11.473,19.132,16.541c15.329,12.173,30.062,21.211,43.865,27.011
		c32.726-8.276,62.945-22.862,89.286-42.381C411.961,444.855,412.097,424.093,408.545,400.144z M385.076,458
		c-3.041,13.145-8.631,22.152-16.624,26.76c-7.983,4.618-18.578,4.953-31.483,1.024c-13.981-4.274-30.302-13.615-47.208-27.042
		c-5.684-4.514-11.379-9.425-17.074-14.702c-5.58-5.183-11.16-10.721-16.697-16.583c-9.509-10.062-18.913-21.076-28.087-32.893
		c-6.123-7.889-12.152-16.133-18.035-24.691c-8.537-12.403-16.781-25.464-24.618-39.048c-7.847-13.584-15.036-27.251-21.504-40.845
		c-4.472-9.373-8.6-18.714-12.361-27.961c-5.653-13.855-10.491-27.512-14.451-40.772c-2.299-7.732-4.315-15.318-5.998-22.747
		c-1.735-7.565-3.145-14.963-4.211-22.141c-3.176-21.347-3.103-40.155,0.188-54.397c3.041-13.145,8.641-22.152,16.624-26.76
		c4.315-2.487,9.383-3.741,15.161-3.741c4.932,0,10.386,0.909,16.321,2.727c13.981,4.263,30.302,13.615,47.208,27.032
		c5.684,4.514,11.389,9.425,17.074,14.723c5.59,5.172,11.16,10.71,16.687,16.562c9.519,10.062,18.923,21.076,28.108,32.904
		c6.123,7.889,12.152,16.133,18.035,24.691c8.526,12.403,16.771,25.464,24.607,39.037c7.847,13.584,15.036,27.251,21.504,40.845
		c4.472,9.383,8.6,18.725,12.361,27.972c5.653,13.855,10.491,27.502,14.451,40.761c2.299,7.732,4.315,15.318,6.008,22.747
		c1.724,7.565,3.135,14.963,4.201,22.141C388.441,424.95,388.368,443.758,385.076,458z"
          />
          <path
            fill="#F2F2F2"
            d="M427.677,212.961c-7.576-2.988-15.559-5.757-23.897-8.307c-7.314-2.226-14.9-4.284-22.727-6.154
		c-20.543-4.911-42.736-8.568-65.964-10.867c-10.146-1.014-20.501-1.755-30.992-2.226c-9.258-0.428-18.641-0.648-28.097-0.648
		s-18.84,0.219-28.108,0.648c-10.501,0.47-20.856,1.223-31.002,2.226c-23.228,2.299-45.411,5.956-65.954,10.867
		c-7.826,1.87-15.412,3.929-22.727,6.154c-8.338,2.539-16.321,5.319-23.897,8.307C34.816,232.5,7.544,259.856,7.544,289.98
		c0,30.124,27.272,57.48,76.769,77.03c7.576,2.988,15.548,5.757,23.886,8.307c7.314,2.226,14.9,4.284,22.727,6.144
		c20.543,4.921,42.736,8.568,65.975,10.877c10.146,1.003,20.501,1.745,31.002,2.226c9.258,0.428,18.641,0.637,28.097,0.637
		c9.456,0,18.829-0.209,28.087-0.637c10.501-0.481,20.846-1.223,31.002-2.226c23.228-2.299,45.432-5.956,65.975-10.877
		c7.826-1.87,15.412-3.918,22.727-6.154c8.328-2.539,16.311-5.308,23.886-8.297c49.507-19.55,76.769-46.905,76.769-77.03
		C504.445,259.856,477.184,232.5,427.677,212.961z M466.045,317.753c-10.679,9.979-26.937,19.435-47.01,27.366
		c-6.76,2.664-13.866,5.151-21.285,7.429c-7.283,2.247-14.858,4.305-22.695,6.165c-13.469,3.208-27.711,5.841-42.538,7.879
		c-9.885,1.369-20.031,2.466-30.386,3.271c-15.015,1.202-30.448,1.808-46.132,1.808s-31.117-0.606-46.132-1.797
		c-10.355-0.815-20.511-1.912-30.396-3.281c-14.827-2.038-29.069-4.671-42.538-7.879c-7.837-1.86-15.412-3.918-22.695-6.165
		c-7.419-2.278-14.524-4.765-21.285-7.429c-20.072-7.931-36.331-17.387-47.01-27.366c-9.864-9.206-14.869-18.547-14.869-27.773
		c0-9.226,5.005-18.568,14.869-27.773c10.679-9.979,26.937-19.435,47.01-27.366c6.76-2.664,13.866-5.151,21.285-7.429
		c7.283-2.247,14.858-4.305,22.695-6.165c13.469-3.208,27.711-5.841,42.538-7.879c9.885-1.369,20.041-2.466,30.396-3.281
		c15.015-1.191,30.448-1.797,46.132-1.797s31.117,0.606,46.132,1.808c10.355,0.805,20.501,1.902,30.386,3.271
		c14.827,2.038,29.069,4.671,42.538,7.879c7.837,1.86,15.412,3.918,22.695,6.165c7.419,2.278,14.524,4.765,21.285,7.429
		c20.072,7.931,36.331,17.387,47.01,27.366c9.864,9.206,14.869,18.547,14.869,27.773
		C480.914,299.207,475.909,308.548,466.045,317.753z"
          />
          <path
            fill="#F2F2F2"
            d="M380.217,74.815c-26.091-15.057-63.404-5.12-105.085,27.972
		c-6.374,5.068-12.769,10.595-19.132,16.551c-5.59,5.214-11.17,10.762-16.697,16.603c-14.535,15.339-28.797,32.726-42.412,51.691
		c-5.945,8.296-11.766,16.886-17.418,25.736c-5.005,7.805-9.874,15.809-14.597,24.001c-4.723,8.192-9.226,16.415-13.49,24.649
		c-4.838,9.331-9.373,18.672-13.573,27.961c-9.624,21.274-17.554,42.318-23.573,62.568c-2.299,7.722-4.315,15.318-6.04,22.768
		c-1.964,8.485-3.563,16.771-4.754,24.827c-3.553,23.939-3.417,44.701,0.261,61.649c26.342,19.529,56.56,34.116,89.287,42.392
		c13.803-5.799,28.536-14.838,43.865-27.011c6.384-5.068,12.779-10.595,19.143-16.541c5.59-5.214,11.16-10.752,16.687-16.593
		c14.524-15.339,28.797-32.737,42.402-51.702c5.945-8.297,11.766-16.886,17.429-25.746c5.005-7.805,9.874-15.809,14.597-24.001
		c4.733-8.182,9.226-16.405,13.49-24.639c4.838-9.331,9.373-18.672,13.584-27.972c9.613-21.264,17.544-42.318,23.562-62.568
		c2.288-7.711,4.305-15.308,6.029-22.758c1.975-8.485,3.563-16.781,4.765-24.837C416.36,127.164,406.309,89.882,380.217,74.815z
		 M375.056,221.247c-3.96,13.26-8.798,26.906-14.451,40.761c-3.762,9.247-7.889,18.589-12.361,27.972
		c-6.468,13.594-13.657,27.261-21.504,40.845c-7.837,13.573-16.081,26.634-24.607,39.037c-5.893,8.568-11.922,16.812-18.045,24.701
		c-9.174,11.818-18.578,22.831-28.097,32.893c-5.527,5.851-11.097,11.389-16.687,16.572c-5.684,5.287-11.389,10.198-17.074,14.712
		c-16.906,13.427-33.228,22.768-47.208,27.042c-12.904,3.929-23.5,3.594-31.483-1.024c-7.983-4.608-13.584-13.615-16.624-26.76
		c-3.291-14.242-3.365-33.05-0.188-54.397c1.066-7.178,2.476-14.576,4.2-22.141c1.693-7.429,3.709-15.015,6.008-22.747
		c3.96-13.26,8.798-26.917,14.451-40.772c3.762-9.247,7.889-18.589,12.361-27.961c6.468-13.594,13.657-27.261,21.504-40.845
		c7.837-13.584,16.081-26.645,24.618-39.048c5.883-8.558,11.901-16.802,18.024-24.68c9.185-11.828,18.589-22.841,28.097-32.904
		c5.538-5.862,11.118-11.4,16.697-16.572c5.695-5.287,11.389-10.198,17.074-14.712c16.906-13.416,33.228-22.768,47.208-27.032
		c5.935-1.818,11.389-2.727,16.321-2.727c5.778,0,10.856,1.254,15.161,3.741c7.993,4.608,13.584,13.615,16.624,26.76
		c3.291,14.242,3.365,33.05,0.188,54.397c-1.066,7.178-2.476,14.576-4.211,22.141C379.371,205.928,377.354,213.514,375.056,221.247z
		"
          />
          <circle fill="#F2F2F2" cx="256" cy="289.98" r="46.696" />
        </g>
      </motion.svg>
      {/* <motion.svg
        style={{ gridColumn: '1', gridRow: '1', zIndex: '2' }}
        xmlns="http://www.w3.org/2000/svg"
        height="30%"
        transition={transition2}
        animate={iconControls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: '50%', x: '110%' },
          hidden: { opacity: 0, y: 100, x: '110%' },
        }}
        viewBox="0 0 250 250"
        enableBbackground="new 0 0 250 250"
      >
        <g>
          <polygon
            fill="#DD0031"
            points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2 	"
          />
          <polygon
            fill="#C3002F"
            points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2 125,30 	"
          />
          <path
            fill="#FFFFFF"
            d="M125,52.1L66.8,182.6h0h21.7h0l11.7-29.2h49.4l11.7,29.2h0h21.7h0L125,52.1L125,52.1L125,52.1L125,52.1
		L125,52.1z M142,135.4H108l17-40.9L142,135.4z"
          />
        </g>
      </motion.svg> */}
      <motion.svg
        style={{ gridColumn: '1', gridRow: '1', zIndex: '2' }}
        version="1.1"
        height="22.5%"
        viewBox="0 0 261.76 226.69"
        xmlns="http://www.w3.org/2000/svg"
        transition={transition3}
        animate={iconControls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: '90%', x: '240%' },
          hidden: { opacity: 0, y: 125, x: '240%' },
        }}
      >
        <g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)">
          <g transform="translate(178.06 235.01)">
            <path
              d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z"
              fill="#41b883"
            />
          </g>
          <g transform="translate(178.06 235.01)">
            <path
              d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z"
              fill="#34495e"
            />
          </g>
        </g>
      </motion.svg>
      <motion.svg
        style={{ gridColumn: '1', gridRow: '1', zIndex: '2' }}
        viewBox="0 0 30.31081 32.499828"
        height="22.5%"
        transition={transition2}
        animate={iconControls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: '85%', x: '180%' },
          hidden: { opacity: 0, y: 100, x: '180%' },
        }}
      >
        <g transform="translate(-77.942529,-177.00005)" id="layer1">
          <g id="g4550">
            <path
              style={{ fill: '#e55b2d', fillOpacity: 1 }}
              d="m 360.04883,687.87305 v 18.89843 l 32.73047,18.89844 v -18.89844 z m -65.46289,18.89843 v 18.89844 l 16.36523,9.44727 V 716.2207 Z m 49.0957,9.44922 -16.36523,9.44922 v 56.69141 l 16.36523,9.44922 v -37.79493 l 16.36719,9.44922 v -18.89843 l -16.36719,-9.44922 z"
              transform="scale(0.26458333)"
              id="path4508"
            />
            <path
              style={{ fill: '#ed8e24', fillOpacity: 1 }}
              d="m 360.04883,687.87305 -49.09766,28.34765 v 18.89649 l 32.73047,-18.89649 v 18.89649 l 16.36719,-9.44727 z m 49.09765,9.44922 -16.36718,9.44921 v 18.89844 l 16.36718,-9.44922 z m -32.73242,37.79492 -16.36523,9.44922 v 18.89843 l 16.36523,-9.44922 z m -16.36523,28.34765 -16.36719,-9.44922 v 37.79493 l 16.36719,-9.44922 z"
              transform="scale(0.26458333)"
              id="path4491"
            />
            <path
              style={{ fill: '#f8bf3c', fillOpacity: 1 }}
              d="m 360.04883,668.97656 -65.46289,37.79492 16.36523,9.44922 49.09766,-28.34765 32.73047,18.89843 16.36718,-9.44921 z m 0,56.69336 -16.36719,9.44727 16.36719,9.44922 16.36523,-9.44922 z"
              transform="scale(0.26458333)"
              id="path4506"
            />
          </g>
        </g>
      </motion.svg>
    </div>
  );
};

export default DesktopScreen;

<svg
  height="445pt"
  viewBox="-25 0 445 445.6"
  width="445pt"
  xmlns="http://www.w3.org/2000/svg"
>
  <linearGradient id="a">
    <stop offset="0" stop-color="#00efd1" />
    <stop offset="1" stop-color="#00acea" />
  </linearGradient>
  <linearGradient
    id="b"
    gradientTransform="matrix(1 0 0 -1 -58.519327 480.8)"
    gradientUnits="userSpaceOnUse"
    x1="256.03"
    x2="256.03"
    y1="498"
    y2="13.191"
  />
  <linearGradient
    id="c"
    gradientTransform="matrix(1 0 0 -1 -58.519327 480.8)"
    gradientUnits="userSpaceOnUse"
    x1="256"
    x2="256"
    y1="498"
    y2="13.191"
  />
  <path
    d="m385.082031 102.800781c-16.601562-26-52.300781-36.800781-100.402343-30.601562-1.699219.199219-3.5.5-5.199219.699219-.699219-1.597657-1.398438-3.199219-2.199219-4.796876-20.699219-43.902343-49-68.101562-79.800781-68.101562s-59.199219 24.199219-79.800781 68.101562c-.699219 1.597657-1.5 3.199219-2.199219 4.796876-1.800781-.296876-3.5-.5-5.199219-.699219-48.199219-6.300781-83.800781 4.601562-100.402344 30.601562-16.597656 26-11.5 62.898438 14.300782 103.898438 3.402343 5.402343 7.101562 10.800781 11.101562 16.101562-4 5.398438-7.699219 10.699219-11.101562 16.097657-25.800782 41-30.898438 78-14.300782 103.902343 13.5 21.199219 39.703125 32.300781 75 32.300781 8.460938-.046874 16.910156-.613281 25.300782-1.703124 1.699218-.199219 3.5-.5 5.199218-.699219.703125 1.601562 1.402344 3.199219 2.203125 4.800781 20.699219 43.898438 49 68.101562 79.796875 68.101562 30.800782 0 59.203125-24.203124 79.800782-68.101562.699218-1.601562 1.5-3.199219 2.199218-4.800781 1.800782.300781 3.5.5 5.203125.699219 8.382813 1.136718 16.835938 1.703124 25.296875 1.703124 35.300782 0 61.5-11.101562 75-32.300781 16.601563-26 11.5-62.902343-14.296875-103.902343-3.402343-5.398438-7.101562-10.796876-11.101562-16.097657 4-5.402343 7.699219-10.699219 11.101562-16.101562 26.097657-41.097657 31.199219-78 14.5-103.898438zm-249.300781-26.199219c16.898438-36 39.398438-56.601562 61.699219-56.601562s44.800781 20.601562 61.699219 56.601562c.011718.074219.046874.144532.101562.199219-21.242188 5.109375-41.960938 12.171875-61.902344 21.097657-19.917968-8.96875-40.644531-16.035157-61.898437-21.097657.199219 0 .199219-.101562.300781-.199219zm151.800781 146.199219c.003907 16-.863281 31.992188-2.601562 47.898438-12.464844 10.058593-25.484375 19.40625-39 28-15.597657 10.015625-31.832031 19.003906-48.601563 26.902343-16.734375-7.960937-32.96875-16.945312-48.597656-26.902343-13.5-8.617188-26.519531-17.964844-39-28-3.46875-31.839844-3.46875-63.960938 0-95.800781 26.953125-21.660157 56.355469-40.085938 87.597656-54.898438 16.738282 7.957031 32.96875 16.941406 48.601563 26.898438 13.5 8.617187 26.519531 17.964843 39 28 1.738281 15.910156 2.605469 31.898437 2.601562 47.902343zm19.097657-29.101562c9.792968 9.121093 19.011718 18.839843 27.601562 29.101562-8.589844 10.257813-17.808594 19.976563-27.601562 29.097657.601562-9.597657.902343-19.296876.902343-29.097657s-.300781-19.5-.902343-29.101562zm-25.800782 105.402343c-3.15625 17.3125-7.738281 34.335938-13.699218 50.898438-15.53125-3.507812-30.773438-8.1875-45.597657-14 11.796875-6.199219 23.597657-13 35.296875-20.398438 8.203125-5.300781 16.203125-10.800781 24-16.5zm-107.5 36.898438c-14.796875 5.886719-30.046875 10.570312-45.597656 14-5.960938-16.5625-10.542969-33.585938-13.699219-50.898438 7.699219 5.699219 15.699219 11.199219 24 16.398438 11.699219 7.5 23.5 14.300781 35.296875 20.5zm-85.097656-84.101562c-9.792969-9.121094-19.007812-18.839844-27.601562-29.097657 8.59375-10.261719 17.808593-19.980469 27.601562-29.101562-.601562 9.601562-.902344 19.300781-.902344 29.101562s.300782 19.5.902344 29.097657zm25.800781-105.398438c3.15625-17.316406 7.738281-34.339844 13.699219-50.898438 15.53125 3.503907 30.777344 8.183594 45.597656 14-11.796875 6.199219-23.597656 13-35.296875 20.398438-8.203125 5.300781-16.203125 10.800781-24 16.5zm142.699219-16.5c-11.601562-7.398438-23.402344-14.300781-35.300781-20.398438 14.796875-5.886718 30.046875-10.570312 45.601562-14 5.957031 16.558594 10.539063 33.582032 13.699219 50.898438-7.699219-5.699219-15.699219-11.199219-24-16.5zm-215.699219 66c-21.203125-33.601562-26.402343-63.699219-14.402343-82.5 9.601562-15 30.402343-23.101562 58.5-23.101562 7.523437.03125 15.039062.535156 22.5 1.5h.199218c-8.089844 23.523437-13.71875 47.820312-16.796875 72.5-15.410156 12.855468-29.757812 26.9375-42.902343 42.101562-2.5-3.398438-4.898438-6.898438-7.097657-10.5zm66.5 157.601562c-7.460937.96875-14.976562 1.46875-22.5 1.5-28.101562 0-48.902343-8-58.5-23.101562-12-18.800781-6.800781-48.898438 14.398438-82.5 2.199219-3.5 4.601562-7.101562 7.101562-10.601562 13.140625 15.167968 27.488281 29.246093 42.898438 42.101562 3.082031 24.683594 8.710937 48.980469 16.800781 72.5 0 .101562-.101562.101562-.199219.101562zm151.597657 15.398438c-16.898438 36-39.398438 56.601562-61.699219 56.601562s-44.800781-20.601562-61.699219-56.601562c-.011719-.074219-.046875-.144531-.101562-.199219 21.242187-5.109375 41.960937-12.171875 61.902343-21.101562 19.917969 8.972656 40.644531 16.039062 61.898438 21.101562-.199219 0-.199219.097657-.300781.199219zm94.699218-119.398438c21.203125 33.597657 26.402344 63.699219 14.402344 82.5-12 18.796876-41.5 26.699219-80.902344 21.5h-.199218c8.089843-23.523437 13.722656-47.820312 16.800781-72.5 15.410156-12.855468 29.757812-26.9375 42.898437-42.101562 2.402344 3.5 4.800782 7 7 10.601562zm-50-85.101562c-3.078125-24.683594-8.707031-48.980469-16.796875-72.5h.199219c39.398438-5.101562 68.898438 2.699219 80.898438 21.5s6.800781 48.898438-14.398438 82.5c-2.199219 3.5-4.601562 7.101562-7.101562 10.601562-13.082032-15.191406-27.398438-29.273437-42.800782-42.101562zm0 0"
    fill="url(#b)"
  />
  <path
    d="m197.480469 183.199219c-21.871094 0-39.601563 17.730469-39.601563 39.601562 0 21.871094 17.730469 39.597657 39.601563 39.597657 21.871093 0 39.601562-17.726563 39.601562-39.597657-.015625-21.867187-17.738281-39.585937-39.601562-39.601562zm0 59.199219c-10.824219 0-19.601563-8.773438-19.601563-19.597657s8.777344-19.601562 19.601563-19.601562 19.601562 8.777343 19.601562 19.601562c-.019531 10.816407-8.785156 19.582031-19.601562 19.597657zm0 0"
    fill="url(#c)"
  />
</svg>;