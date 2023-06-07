---
title: Ramya and Dan SVG
pubDatetime: 2021-10-07T12:13:24.000Z
description: Ramya and Dan SVG
tags:
  - joy
---

<script type="text/javascript">
(function(){

  const config = {
    PAUSE_BEFORE_START: 300, // milliseconds
    SVG_ID: 'rdsvg',
    ANIMATION_DURATION: 4 // seconds
  };

  function getShapesFromSVG(svg) {
    return [...Array.from(svg.querySelectorAll("path")), ...Array.from(svg.querySelectorAll("polygon"))];
  }

  function initShapes(shapes) {
    shapes.forEach(shape => {
      setStyles(shape);
      bindFade(shape);
    })
  }

  function setStyles(shape) {
    const shapeLength = shape.getTotalLength();
    shape.style.fillOpacity = .04;
    shape.style.stroke = "#999";
    shape.style.strokeOpacity = 1;
    shape.style.strokeWidth = 1;
    shape.style.transition = shape.style.webkitTransition = "none";
    shape.style.strokeDasharray = `${shapeLength/20} ${shapeLength}`;
    shape.style.strokeDashoffset = shapeLength;
  }

  function doLinesAndFadeAnimation(shapes) {
    shapes.forEach(shape => {
      const shapeLength = shape.getTotalLength();
      shape.getBoundingClientRect();
      shape.style.transition = shape.style.WebkitTransition = `stroke-dashoffset ${config.ANIMATION_DURATION}s ease-in-out, stroke-dasharray ${config.ANIMATION_DURATION}s ease-in-out`;
      shape.style.strokeDashoffset = 0;
      shape.style.strokeDasharray = `${shapeLength} 1000`;
    });
  };

  const bindFade = function(shape) {
    shape.addEventListener('transitionend', () => {
      const style = shape.style;
      style.transition = style.WebkitTransition = `fill-opacity ${config.ANIMATION_DURATION}s ease-in-out, stroke-opacity 1s ease-in-out`;
      style.fillOpacity = 1;
      style.strokeOpacity = 0;
    });
  };

  const shapes = getShapesFromSVG(document.getElementById("rdsvg"));
  initShapes(shapes);

  setTimeout(function(){
    doLinesAndFadeAnimation(shapes);
  }, config.PAUSE_BEFORE_START);

})();

</script>

<svg version="1.1" id="rdsvg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="578px" height="104px" viewBox="0 0 578 104" enable-background="new 0 0 578 104" xml:space="preserve">
<g>
<path fill="#F2768B" d="M38.396,30.244c0,2.783-0.497,5.516-1.491,8.199c-0.994,2.683-2.37,5.085-4.125,7.205
		c-1.756,2.121-3.843,3.826-6.261,5.118c-2.419,1.292-5.085,1.938-8,1.938c-4.174,0-7.503-1.225-9.988-3.677
		c-2.484-2.45-3.727-5.764-3.727-9.938c0-3.312,0.728-6.525,2.186-9.64c1.457-3.113,3.444-6.028,5.963-8.746
		c2.518-2.716,5.466-5.183,8.845-7.404c3.379-2.219,6.989-4.125,10.833-5.714c3.842-1.59,7.834-2.815,11.976-3.677
		c4.14-0.86,8.199-1.292,12.174-1.292c2.848,0,5.78,0.233,8.795,0.696c3.014,0.464,5.615,1.259,7.801,2.385
		c0.662-0.264,1.424-0.562,2.286-0.894c0.86-0.331,1.772-0.646,2.733-0.944c0.96-0.298,1.904-0.562,2.833-0.795
		c0.927-0.231,1.789-0.38,2.584-0.447l0.1,0.596c-1.59,0.199-3.165,0.596-4.721,1.193c-1.558,0.596-2.999,1.259-4.323,1.987
		c5.034,2.85,7.553,6.957,7.553,12.323c0,3.513-0.68,6.51-2.038,8.994c-1.359,2.485-3.147,4.506-5.367,6.062
		c-2.22,1.558-4.754,2.683-7.603,3.379c-2.85,0.696-5.764,1.043-8.746,1.043v0.199c2.053,0.862,3.593,2.005,4.621,3.429
		c1.026,1.425,1.541,3.264,1.541,5.516c0,1.458-0.315,3.247-0.944,5.367c-0.631,2.121-1.342,4.308-2.137,6.56
		c-0.795,2.186-1.525,4.29-2.187,6.311c-0.663,2.021-0.994,3.693-0.994,5.019c0,2.121,0.96,3.181,2.882,3.181
		c1.988,0,4.289-0.68,6.907-2.037c2.616-1.357,5.382-3.462,8.298-6.312c5.101-4.969,9.904-11.031,14.41-18.187l0.895,0.397
		c-1.525,2.385-3.33,5.053-5.417,8c-2.087,2.948-4.621,5.947-7.603,8.994c-6.559,6.892-12.622,10.336-18.187,10.336
		c-2.32,0-4.158-0.563-5.516-1.69c-1.359-1.125-2.037-2.814-2.037-5.068c0-1.456,0.38-3.213,1.143-5.267
		c0.761-2.053,1.606-4.174,2.534-6.36c0.927-2.187,1.755-4.373,2.485-6.559c0.728-2.187,1.093-4.107,1.093-5.764
		c0-2.518-0.68-4.174-2.038-4.969c-1.359-0.795-3.13-1.357-5.317-1.689l0.397-0.994c0.729,0.134,1.424,0.233,2.087,0.298
		c0.662,0.067,1.357,0.1,2.087,0.1c2.915,0,5.565-0.547,7.95-1.64c2.385-1.093,4.423-2.584,6.112-4.472s2.997-4.09,3.925-6.609
		c0.927-2.517,1.392-5.2,1.392-8.05c0-1.655-0.315-3.246-0.944-4.771c-0.63-1.523-1.575-2.749-2.833-3.677
		c-3.379,1.987-6.609,5.019-9.689,9.093c-3.081,4.075-6.162,8.614-9.243,13.615c-3.081,5.003-6.229,10.122-9.441,15.354
		c-3.214,5.235-6.609,10.022-10.187,14.36c-3.578,4.34-7.388,7.886-11.429,10.635c-4.042,2.748-8.447,4.124-13.218,4.124
		c-1.061,0-2.154-0.134-3.28-0.397c-1.127-0.266-2.137-0.681-3.031-1.242c-0.895-0.562-1.64-1.293-2.236-2.188
		c-0.596-0.894-0.895-1.938-0.895-3.13s0.363-2.152,1.093-2.882c0.729-0.729,1.722-1.094,2.981-1.094
		c0.927,0,1.672,0.299,2.236,0.895c0.562,0.597,0.845,1.326,0.845,2.187c0,0.796-0.233,1.558-0.696,2.286
		c-0.464,0.729-1.16,1.061-2.087,0.994c0.199,0.861,0.895,1.639,2.087,2.335s2.55,1.044,4.075,1.044
		c3.444,0,6.674-1.342,9.689-4.025c3.014-2.684,5.996-6.145,8.944-10.385c2.947-4.24,5.896-8.945,8.845-14.113
		c2.947-5.168,6.095-10.236,9.441-15.206c3.345-4.969,6.957-9.541,10.833-13.714c3.876-4.174,8.165-7.387,12.87-9.64
		c-2.186-1.126-4.638-1.888-7.354-2.286c-2.717-0.398-5.367-0.597-7.951-0.597c-3.313,0-6.808,0.365-10.485,1.093
		c-3.677,0.73-7.289,1.789-10.833,3.18c-3.545,1.392-6.941,3.115-10.187,5.168c-3.247,2.054-6.096,4.422-8.547,7.106
		c-2.452,2.683-4.407,5.632-5.863,8.845c-1.458,3.214-2.187,6.708-2.187,10.485c0,3.645,0.895,6.526,2.683,8.646
		c1.789,2.122,4.306,3.181,7.553,3.181c2.848,0,5.416-0.662,7.702-1.988c2.286-1.325,4.239-3.014,5.863-5.068
		c1.623-2.053,2.865-4.339,3.727-6.857c0.86-2.517,1.292-4.969,1.292-7.354H38.396z"/>
<path fill="#F2768B" d="M117.901,39.188h6.459c-2.452,3.446-4.804,6.792-7.056,10.038c-2.253,3.247-4.258,6.245-6.012,8.994
		c-1.756,2.75-3.165,5.168-4.224,7.255c-1.061,2.087-1.59,3.727-1.59,4.92c0,1.723,0.895,2.584,2.683,2.584
		c1.392,0,3.163-0.68,5.317-2.038c2.152-1.356,4.488-3.229,7.006-5.614c2.518-2.386,5.101-5.168,7.752-8.349
		c2.649-3.181,5.168-6.559,7.553-10.137l0.596,0.199c-1.789,2.717-3.893,5.649-6.311,8.794c-2.419,3.148-4.953,6.08-7.603,8.796
		c-2.65,2.718-5.301,4.986-7.951,6.808c-2.65,1.823-5.135,2.732-7.454,2.732c-1.922,0-3.329-0.48-4.224-1.44
		s-1.341-2.103-1.341-3.429c0-0.927,0.149-1.838,0.447-2.732c0.298-0.895,0.612-1.805,0.944-2.733l-0.199-0.1
		c-0.862,0.929-1.938,2.005-3.23,3.229c-1.292,1.227-2.683,2.37-4.174,3.43c-1.491,1.061-3.031,1.955-4.622,2.683
		c-1.59,0.729-3.115,1.093-4.571,1.093c-2.452,0-4.174-0.762-5.168-2.285s-1.491-3.246-1.491-5.168c0-2.716,0.86-5.715,2.584-8.994
		c1.722-3.279,3.908-6.36,6.559-9.242c2.649-2.882,5.531-5.283,8.646-7.205c3.113-1.921,6.062-2.882,8.845-2.882
		c1.325,0,2.484,0.183,3.479,0.547c0.994,0.365,1.821,0.862,2.484,1.491c0.662,0.63,1.176,1.341,1.541,2.137
		c0.363,0.795,0.646,1.624,0.845,2.484h0.199L117.901,39.188z M85.403,67.016c0,1.524,0.313,2.699,0.944,3.527
		c0.629,0.83,1.506,1.242,2.633,1.242c1.126,0,2.451-0.412,3.976-1.242c1.523-0.828,3.113-1.938,4.77-3.329
		c1.655-1.392,3.295-2.997,4.919-4.819c1.623-1.822,3.064-3.76,4.323-5.814c1.258-2.053,2.286-4.14,3.081-6.261
		c0.795-2.12,1.193-4.14,1.193-6.062c0-1.523-0.432-2.684-1.292-3.479c-0.862-0.795-1.922-1.193-3.18-1.193
		c-1.988,0-4.208,0.862-6.659,2.584c-2.452,1.724-4.771,3.926-6.957,6.609c-2.187,2.684-4.025,5.649-5.516,8.896
		S85.403,64.033,85.403,67.016z"/>
<path fill="#F2768B" d="M117.8,73.375c1.458-2.449,3.13-5.133,5.019-8.049c1.889-2.916,3.81-5.88,5.764-8.896
		c1.954-3.014,3.876-5.995,5.764-8.944c1.889-2.947,3.593-5.714,5.118-8.298h6.062l-13.118,18.486l0.199,0.198
		c1.258-1.523,2.783-3.395,4.571-5.615c1.789-2.219,3.759-4.355,5.913-6.41c2.152-2.053,4.455-3.809,6.907-5.267
		c2.45-1.457,4.969-2.187,7.553-2.187c1.59,0,2.897,0.415,3.925,1.242c1.026,0.829,1.541,2.038,1.541,3.627
		c0,0.929-0.333,2.055-0.994,3.379c-0.663,1.326-1.441,2.668-2.335,4.025c-0.895,1.358-1.806,2.667-2.733,3.925
		c-0.928,1.26-1.657,2.286-2.186,3.082l0.199,0.198c1.391-1.987,3.063-4.107,5.019-6.36c1.954-2.252,4.041-4.356,6.261-6.311
		c2.219-1.954,4.505-3.578,6.857-4.87c2.351-1.292,4.621-1.938,6.808-1.938c1.921,0,3.362,0.464,4.323,1.392
		c0.96,0.928,1.441,2.22,1.441,3.875c0,1.127-0.382,2.452-1.143,3.976c-0.762,1.525-1.724,3.13-2.882,4.82
		c-1.16,1.689-2.402,3.396-3.727,5.119c-1.326,1.723-2.568,3.379-3.727,4.969c-1.16,1.59-2.121,3.065-2.882,4.422
		c-0.762,1.359-1.143,2.502-1.143,3.43c0,0.795,0.249,1.425,0.746,1.888c0.497,0.464,1.109,0.696,1.838,0.696
		c1.59,0,3.461-0.629,5.615-1.889c2.152-1.258,4.472-3.014,6.957-5.268c2.485-2.252,5.084-4.951,7.802-8.1
		c2.716-3.146,5.466-6.609,8.249-10.385l0.795,0.397c-2.717,3.711-5.433,7.173-8.149,10.386c-2.718,3.214-5.352,6.012-7.901,8.396
		c-2.552,2.386-5.003,4.258-7.354,5.615c-2.353,1.357-4.522,2.037-6.509,2.037c-2.055,0-3.578-0.58-4.572-1.738
		s-1.491-2.6-1.491-4.323c0-1.258,0.38-2.667,1.143-4.224c0.761-1.557,1.722-3.164,2.882-4.82c1.159-1.655,2.401-3.312,3.727-4.969
		c1.324-1.656,2.567-3.246,3.727-4.771c1.159-1.523,2.12-2.915,2.882-4.174c0.761-1.258,1.143-2.286,1.143-3.081
		c0-0.927-0.249-1.573-0.745-1.938c-0.497-0.363-1.11-0.547-1.839-0.547c-1.326,0-2.882,0.447-4.671,1.342
		c-1.789,0.895-3.662,2.154-5.615,3.776c-1.955,1.625-3.96,3.513-6.013,5.665c-2.055,2.154-4.059,4.472-6.013,6.957
		c-1.955,2.485-3.793,5.103-5.516,7.851c-1.724,2.751-3.214,5.484-4.472,8.199h-6.36c1.854-3.312,3.859-6.624,6.013-9.938
		c2.152-3.312,4.157-6.376,6.012-9.193c1.854-2.815,3.412-5.267,4.671-7.354c1.258-2.087,1.889-3.627,1.889-4.621
		c0-1.789-0.929-2.684-2.783-2.684c-1.657,0-3.513,0.614-5.565,1.839c-2.055,1.227-4.142,2.817-6.261,4.77
		c-2.121,1.955-4.208,4.174-6.261,6.659c-2.054,2.485-3.992,4.987-5.813,7.503c-1.823,2.519-3.429,4.919-4.82,7.205
		c-1.391,2.286-2.484,4.224-3.279,5.813H117.8z"/>
<path fill="#F2768B" d="M212.907,39.188c-2.385,3.446-4.771,6.758-7.156,9.938c-2.385,3.18-4.521,6.096-6.41,8.746
		c-1.888,2.65-3.428,4.985-4.621,7.007c-1.192,2.021-1.789,3.627-1.789,4.819c0,1.923,0.927,2.882,2.782,2.882
		c1.921,0,4.157-0.927,6.708-2.782c2.55-1.854,5.25-4.323,8.1-7.403c2.848-3.082,5.747-6.625,8.696-10.635
		c2.947-4.008,5.78-8.199,8.497-12.572h6.162c-3.91,5.367-7.553,10.882-10.932,16.547s-6.924,11.28-10.634,16.845
		c6.293-1.125,12.306-3.891,18.038-8.298c5.73-4.405,10.815-9.889,15.255-16.448l0.696,0.298
		c-4.771,7.29-10.187,13.135-16.25,17.542c-6.062,4.406-12.208,7.105-18.435,8.1c-2.584,3.511-5.218,7.071-7.901,10.684
		c-2.683,3.609-5.632,6.857-8.845,9.738c-3.214,2.883-6.741,5.234-10.584,7.057c-3.842,1.822-8.182,2.732-13.019,2.732
		c-2.187,0-4.256-0.281-6.211-0.844c-1.953-0.564-3.66-1.342-5.118-2.336c-1.457-0.994-2.616-2.186-3.478-3.578
		c-0.86-1.391-1.292-2.881-1.292-4.472c0-3.446,1.143-5.963,3.429-7.553c2.286-1.591,5.053-2.386,8.298-2.386v0.299
		c-2.385,0.529-4.14,1.605-5.268,3.229c-1.125,1.622-1.689,3.66-1.689,6.112c0,1.655,0.333,3.131,0.994,4.422
		c0.663,1.293,1.525,2.369,2.584,3.23c1.061,0.859,2.27,1.523,3.627,1.987c1.358,0.463,2.767,0.696,4.224,0.696
		c3.115,0,6.129-0.73,9.043-2.188c2.917-1.457,5.714-3.379,8.398-5.764c2.683-2.385,5.25-5.086,7.702-8.1
		c2.45-3.016,4.77-6.129,6.957-9.342c2.187-3.215,4.224-6.36,6.112-9.441c1.889-3.08,3.627-5.846,5.218-8.299l-0.199-0.198
		c-1.061,1.259-2.353,2.733-3.876,4.423c-1.525,1.689-3.197,3.297-5.019,4.82c-1.823,1.524-3.761,2.816-5.814,3.875
		c-2.055,1.06-4.174,1.59-6.36,1.59c-2.121,0-3.645-0.432-4.572-1.291c-0.927-0.861-1.391-2.021-1.391-3.479
		c0-1.324,0.348-2.733,1.043-4.225c0.696-1.49,1.804-3.361,3.329-5.614c1.523-2.252,3.461-5.002,5.814-8.249
		c2.351-3.245,5.184-7.287,8.497-12.125H212.907z"/>
<path fill="#F2768B" d="M272.436,39.188h6.46c-2.452,3.446-4.805,6.792-7.057,10.038c-2.253,3.247-4.258,6.245-6.013,8.994
		c-1.756,2.75-3.164,5.168-4.224,7.255c-1.061,2.087-1.59,3.727-1.59,4.92c0,1.723,0.895,2.584,2.684,2.584
		c1.391,0,3.163-0.68,5.316-2.038c2.152-1.356,4.488-3.229,7.007-5.614c2.517-2.386,5.101-5.168,7.752-8.349
		c2.648-3.181,5.167-6.559,7.553-10.137l0.596,0.199c-1.788,2.717-3.893,5.649-6.311,8.794c-2.419,3.148-4.953,6.08-7.603,8.796
		c-2.65,2.718-5.302,4.986-7.95,6.808c-2.651,1.823-5.136,2.732-7.454,2.732c-1.922,0-3.329-0.48-4.224-1.44
		s-1.342-2.103-1.342-3.429c0-0.927,0.149-1.838,0.447-2.732c0.299-0.895,0.612-1.805,0.944-2.733l-0.199-0.1
		c-0.861,0.929-1.938,2.005-3.229,3.229c-1.292,1.227-2.684,2.37-4.174,3.43c-1.491,1.061-3.031,1.955-4.621,2.683
		c-1.591,0.729-3.115,1.093-4.572,1.093c-2.452,0-4.174-0.762-5.168-2.285s-1.491-3.246-1.491-5.168c0-2.716,0.86-5.715,2.584-8.994
		c1.722-3.279,3.908-6.36,6.56-9.242c2.648-2.882,5.531-5.283,8.646-7.205c3.113-1.921,6.062-2.882,8.846-2.882
		c1.324,0,2.484,0.183,3.478,0.547c0.994,0.365,1.822,0.862,2.485,1.491c0.661,0.63,1.175,1.341,1.54,2.137
		c0.363,0.795,0.646,1.624,0.845,2.484h0.198L272.436,39.188z M239.938,67.016c0,1.524,0.313,2.699,0.944,3.527
		c0.629,0.83,1.506,1.242,2.634,1.242c1.125,0,2.45-0.412,3.975-1.242c1.523-0.828,3.113-1.938,4.771-3.329
		c1.655-1.392,3.295-2.997,4.92-4.819c1.622-1.822,3.063-3.76,4.322-5.814c1.258-2.053,2.286-4.14,3.081-6.261
		c0.795-2.12,1.192-4.14,1.192-6.062c0-1.523-0.432-2.684-1.292-3.479c-0.861-0.795-1.922-1.193-3.18-1.193
		c-1.987,0-4.208,0.862-6.658,2.584c-2.452,1.724-4.771,3.926-6.957,6.609c-2.187,2.684-4.025,5.649-5.516,8.896
		C240.683,60.92,239.938,64.033,239.938,67.016z"/>
<path fill="#F2768B" d="M376.487,61.35c-2.783,4.175-6.262,7.355-10.436,9.541c-4.174,2.187-8.515,3.279-13.019,3.279
		c-1.26,0-2.651-0.099-4.175-0.297c-1.524-0.199-3.065-0.514-4.621-0.945c-1.558-0.43-3.065-0.993-4.521-1.689
		c-1.458-0.695-2.783-1.506-3.976-2.435c-0.663,0.597-1.426,1.21-2.286,1.839c-0.861,0.631-1.838,1.209-2.932,1.739
		c-1.093,0.53-2.285,0.961-3.577,1.292c-1.292,0.33-2.733,0.496-4.323,0.496c-2.187,0-4.158-0.348-5.913-1.043
		c-1.757-0.695-3.247-1.64-4.473-2.832c-1.227-1.193-2.171-2.6-2.832-4.225c-0.663-1.622-0.994-3.361-0.994-5.217
		c0-2.187,0.413-4.239,1.242-6.162c0.828-1.92,1.938-3.709,3.329-5.366c1.392-1.655,2.965-3.114,4.721-4.373
		c1.755-1.258,3.562-2.286,5.417-3.081c0-2.12,0.447-4.455,1.342-7.006c0.894-2.55,2.137-4.935,3.727-7.156
		c1.59-2.219,3.444-4.075,5.565-5.565c2.119-1.491,4.405-2.236,6.857-2.236c1.788,0,3.279,0.514,4.472,1.541
		c1.192,1.028,1.789,2.501,1.789,4.422c0,1.724-0.713,3.329-2.137,4.82c-1.426,1.491-3.131,2.882-5.118,4.174
		s-4.025,2.435-6.112,3.429c-2.087,0.994-3.761,1.855-5.019,2.583c0.065,4.506,1.026,8.812,2.882,12.919
		c1.854,4.109,4.339,7.752,7.454,10.933c2.45-2.187,4.671-4.538,6.658-7.056c1.988-2.518,3.892-4.854,5.715-7.007
		c1.821-2.152,3.643-3.941,5.466-5.367c1.821-1.424,3.76-2.137,5.813-2.137c1.723,0,3.163,0.464,4.323,1.391
		c1.158,0.929,1.739,2.154,1.739,3.677c0,0.531-0.148,1.127-0.447,1.789c-0.298,0.663-0.68,1.227-1.143,1.689
		c-0.531-1.126-1.392-2.07-2.584-2.833c-1.192-0.761-2.65-1.143-4.373-1.143c-1.259,0-2.435,0.249-3.528,0.746
		c-1.093,0.497-2.121,1.16-3.08,1.987c-0.962,0.83-1.905,1.773-2.833,2.833c-0.929,1.061-1.855,2.186-2.782,3.379
		c-2.981,3.512-5.699,6.427-8.149,8.745c1.987,1.987,4.373,3.677,7.155,5.069c2.783,1.391,5.631,2.086,8.547,2.086
		c2.053,0,4.075-0.298,6.062-0.895c1.987-0.596,3.876-1.424,5.665-2.484c1.788-1.059,3.444-2.285,4.969-3.677
		c1.523-1.392,2.848-2.915,3.976-4.571L376.487,61.35z M313.777,59.264c0,1.59,0.248,3.146,0.745,4.67
		c0.497,1.525,1.192,2.867,2.087,4.025c0.895,1.16,1.971,2.088,3.229,2.783c1.258,0.695,2.684,1.043,4.273,1.043
		c2.451,0,4.538-0.363,6.262-1.093c1.722-0.729,3.213-1.591,4.472-2.584c-3.645-3.047-6.51-6.808-8.597-11.28
		c-2.087-4.472-3.13-9.093-3.13-13.863c-1.525,0.663-2.867,1.574-4.025,2.733c-1.16,1.16-2.137,2.469-2.932,3.925
		c-0.795,1.458-1.392,3.016-1.789,4.672S313.777,57.607,313.777,59.264z M342.896,25.374c0-2.848-1.192-4.273-3.577-4.273
		c-1.458,0-2.999,0.68-4.621,2.038c-1.625,1.358-2.999,3.329-4.125,5.913c-0.993,2.32-1.59,4.357-1.789,6.112
		c-0.198,1.756-0.298,3.297-0.298,4.622c1.921-0.86,3.76-1.755,5.516-2.684c1.755-0.927,3.295-1.954,4.621-3.081
		c1.325-1.126,2.368-2.401,3.131-3.826C342.514,28.77,342.896,27.163,342.896,25.374z"/>
<path fill="#F2768B" d="M487.296,0.827c-3.313,0.597-6.477,1.657-9.49,3.18c-3.016,1.525-5.749,3.446-8.199,5.764
		c1.523,1.458,2.815,3.115,3.876,4.969c1.059,1.855,1.921,3.793,2.584,5.814c0.661,2.021,1.143,4.092,1.44,6.211
		c0.299,2.121,0.447,4.174,0.447,6.162c0,5.963-1.292,11.513-3.876,16.646c-2.584,5.135-5.979,9.575-10.187,13.317
		c-4.208,3.744-8.961,6.693-14.261,8.846c-5.302,2.151-10.668,3.229-16.101,3.229c-2.054,0-3.875-0.05-5.466-0.149
		c-1.59-0.1-3.031-0.232-4.323-0.397c-1.292-0.166-2.484-0.364-3.577-0.597c-1.094-0.232-2.204-0.479-3.329-0.745
		c-0.929,0.134-1.807,0.282-2.634,0.447c-0.829,0.165-1.657,0.313-2.484,0.447c-0.83,0.132-1.757,0.231-2.783,0.298
		c-1.028,0.065-2.203,0.1-3.528,0.1c-1.59,0-2.816-0.148-3.677-0.447c-0.862-0.298-1.292-0.845-1.292-1.64s0.348-1.342,1.044-1.64
		c0.695-0.299,1.605-0.447,2.732-0.447c0.795,0,1.573,0.05,2.336,0.148c0.761,0.1,1.622,0.249,2.584,0.447
		c0.959,0.199,2.037,0.415,3.229,0.646c1.192,0.232,2.649,0.481,4.373,0.746c3.379-0.861,6.476-2.617,9.292-5.268
		c2.815-2.649,5.499-5.797,8.05-9.441c2.55-3.643,5.052-7.653,7.504-12.025c2.45-4.373,4.984-8.729,7.603-13.069
		c2.616-4.338,5.399-8.497,8.348-12.472c2.947-3.976,6.178-7.419,9.689-10.336c-2.782-2.318-5.88-3.958-9.292-4.919
		c-3.413-0.959-6.544-1.441-9.392-1.441c-5.366,0-10.584,0.929-15.652,2.783c-5.068,1.855-9.575,4.439-13.516,7.752
		c-3.943,3.313-7.106,7.222-9.491,11.727c-2.386,4.506-3.578,9.409-3.578,14.708c0,2.121,0.199,4.124,0.597,6.012
		c0.397,1.889,1.093,3.562,2.087,5.019c0.994,1.458,2.286,2.601,3.876,3.429s3.578,1.242,5.963,1.242
		c2.981,0,5.715-0.711,8.199-2.137c2.484-1.424,4.604-3.345,6.36-5.765c1.755-2.417,3.13-5.233,4.124-8.447
		c0.994-3.213,1.491-6.575,1.491-10.087V26.07h1.192v2.882c0,4.109-0.563,7.901-1.689,11.379c-1.128,3.479-2.718,6.494-4.771,9.044
		c-2.055,2.551-4.473,4.539-7.255,5.963c-2.783,1.426-5.831,2.137-9.144,2.137c-2.519,0-4.721-0.48-6.608-1.441
		c-1.889-0.959-3.446-2.236-4.671-3.826c-1.227-1.59-2.154-3.444-2.783-5.565c-0.63-2.12-0.943-4.338-0.943-6.658
		c0-4.107,1.175-8.381,3.527-12.82c2.352-4.438,5.581-8.53,9.69-12.274c4.106-3.742,8.96-6.823,14.559-9.242
		c5.599-2.418,11.644-3.627,18.138-3.627c3.842,0,7.453,0.581,10.833,1.739c3.379,1.16,6.459,2.799,9.242,4.919
		c2.782-2.12,5.729-3.958,8.845-5.516c3.113-1.556,6.426-2.599,9.938-3.13L487.296,0.827z M431.841,73.773
		c4.637,0,8.878-0.696,12.722-2.088c3.841-1.391,7.304-3.262,10.385-5.615c3.081-2.351,5.747-5.117,8-8.298
		c2.252-3.181,4.141-6.542,5.665-10.087c1.523-3.543,2.666-7.188,3.429-10.932c0.761-3.743,1.143-7.37,1.143-10.882
		c0-2.649-0.364-5.317-1.093-8c-0.729-2.683-1.923-4.919-3.578-6.708c-2.717,3.048-5.217,6.494-7.503,10.335
		c-2.286,3.843-4.556,7.819-6.808,11.926c-2.253,4.109-4.571,8.184-6.957,12.224c-2.385,4.042-4.969,7.819-7.752,11.33
		c-2.782,3.513-5.88,6.644-9.292,9.392c-3.413,2.75-7.305,4.82-11.677,6.211v0.199c2.053,0.397,4.124,0.662,6.211,0.795
		C426.822,73.706,429.19,73.773,431.841,73.773z"/>
<path fill="#F2768B" d="M515.321,39.188h6.46c-2.452,3.446-4.805,6.792-7.057,10.038c-2.253,3.247-4.258,6.245-6.013,8.994
		c-1.756,2.75-3.164,5.168-4.224,7.255c-1.061,2.087-1.59,3.727-1.59,4.92c0,1.723,0.895,2.584,2.684,2.584
		c1.391,0,3.163-0.68,5.316-2.038c2.152-1.356,4.488-3.229,7.007-5.614c2.517-2.386,5.101-5.168,7.752-8.349
		c2.648-3.181,5.167-6.559,7.553-10.137l0.596,0.199c-1.788,2.717-3.893,5.649-6.311,8.794c-2.419,3.148-4.953,6.08-7.603,8.796
		c-2.65,2.718-5.302,4.986-7.95,6.808c-2.651,1.823-5.136,2.732-7.454,2.732c-1.922,0-3.329-0.48-4.224-1.44
		s-1.342-2.103-1.342-3.429c0-0.927,0.149-1.838,0.447-2.732c0.299-0.895,0.612-1.805,0.944-2.733l-0.199-0.1
		c-0.861,0.929-1.938,2.005-3.229,3.229c-1.292,1.227-2.684,2.37-4.174,3.43c-1.491,1.061-3.031,1.955-4.621,2.683
		c-1.591,0.729-3.115,1.093-4.572,1.093c-2.451,0-4.174-0.762-5.167-2.285c-0.994-1.523-1.491-3.246-1.491-5.168
		c0-2.716,0.86-5.715,2.584-8.994c1.722-3.279,3.908-6.36,6.56-9.242c2.648-2.882,5.531-5.283,8.646-7.205
		c3.113-1.921,6.062-2.882,8.846-2.882c1.324,0,2.484,0.183,3.478,0.547c0.994,0.365,1.822,0.862,2.485,1.491
		c0.661,0.63,1.175,1.341,1.54,2.137c0.363,0.795,0.646,1.624,0.845,2.484h0.198L515.321,39.188z M482.823,67.016
		c0,1.524,0.313,2.699,0.944,3.527c0.629,0.83,1.506,1.242,2.634,1.242c1.125,0,2.45-0.412,3.975-1.242
		c1.523-0.828,3.113-1.938,4.771-3.329c1.655-1.392,3.295-2.997,4.92-4.819c1.622-1.822,3.063-3.76,4.322-5.814
		c1.258-2.053,2.286-4.14,3.081-6.261c0.795-2.12,1.192-4.14,1.192-6.062c0-1.523-0.432-2.684-1.292-3.479
		c-0.861-0.795-1.922-1.193-3.18-1.193c-1.987,0-4.208,0.862-6.658,2.584c-2.452,1.724-4.771,3.926-6.957,6.609
		c-2.187,2.684-4.025,5.649-5.516,8.896C483.568,60.92,482.823,64.033,482.823,67.016z"/>
<path fill="#F2768B" d="M542.849,39.188l-13.119,18.187l0.199,0.199c1.392-1.656,3.014-3.594,4.87-5.814
		c1.854-2.219,3.842-4.323,5.963-6.311c2.119-1.988,4.322-3.66,6.608-5.019c2.286-1.357,4.555-2.038,6.808-2.038
		c1.987,0,3.528,0.547,4.621,1.64c1.094,1.093,1.64,2.502,1.64,4.224c0,1.061-0.382,2.32-1.143,3.776
		c-0.763,1.458-1.706,3.016-2.832,4.671c-1.128,1.657-2.353,3.347-3.678,5.068c-1.326,1.724-2.551,3.364-3.677,4.919
		c-1.127,1.559-2.071,2.982-2.832,4.273c-0.763,1.293-1.144,2.37-1.144,3.23c0,1.855,0.928,2.783,2.783,2.783
		c2.119,0,4.373-0.712,6.758-2.137c2.385-1.424,5.233-3.826,8.547-7.205c1.324-1.325,2.666-2.783,4.025-4.373
		c1.356-1.59,2.666-3.164,3.925-4.721c1.258-1.556,2.401-3.031,3.429-4.423c1.026-1.391,1.839-2.55,2.436-3.479l0.695,0.398
		c-1.326,1.987-3.031,4.357-5.118,7.105c-2.087,2.75-4.357,5.451-6.808,8.1c-1.458,1.591-2.949,3.115-4.473,4.572
		c-1.524,1.458-3.048,2.732-4.571,3.826c-1.524,1.094-3.031,1.955-4.521,2.584c-1.491,0.629-2.966,0.943-4.423,0.943
		c-1.922,0-3.513-0.53-4.771-1.59c-1.259-1.059-1.888-2.517-1.888-4.373c0-1.986,0.795-4.156,2.385-6.509
		c1.59-2.351,3.345-4.721,5.268-7.106c1.921-2.385,3.677-4.67,5.267-6.857c1.591-2.186,2.386-4.107,2.386-5.764
		c0-0.795-0.266-1.391-0.795-1.789c-0.531-0.397-1.228-0.597-2.087-0.597c-1.657,0-3.513,0.614-5.565,1.839
		c-2.055,1.227-4.159,2.85-6.312,4.87c-2.153,2.022-4.308,4.273-6.459,6.758c-2.154,2.485-4.159,4.97-6.013,7.454
		c-1.856,2.484-3.513,4.869-4.97,7.155c-1.458,2.286-2.551,4.19-3.279,5.714h-6.162c1.724-2.914,3.562-5.879,5.517-8.895
		c1.953-3.014,3.891-5.995,5.813-8.943c1.921-2.948,3.76-5.797,5.516-8.547c1.755-2.749,3.329-5.25,4.721-7.503L542.849,39.188z"/>
</g>

<style>
/* <![CDATA[ */
#rdsvg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
/* ]]> */
</style>
</svg>