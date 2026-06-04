function LoadVideo() {
  var e = document.getElementById("input-video-link").value.trim(),
    n = document.getElementById("videoContainer"),
    t = document.querySelectorAll(".spam-title")[0];
  if ("" === e) {
    var i = document.getElementById("warn-invalid");
    return (
      (i.style.opacity = "1"),
      void (i.style.transform = "translate(-50%, -50%) scale(1)")
    );
  }
  ((t.style.display = "none"),
    (n.innerHTML += `\n    <div style="margin-bottom: 20px; display: inline-block; margin-right: 15px;">\n        <iframe \n        frameborder="0"\n            src="${e}" \n            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" \n            allowfullscreen>\n        </iframe>\n    </div>\n  `),
    (document.getElementById("input-video-link").value = ""));
}
